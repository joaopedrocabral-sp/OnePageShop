import { FormContainer, FormInput, FormButton, DeleteButton } from "./styles";
import { useState } from "react";
import { storage, db } from "../../services/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export function AddProduct({onCancel, onSave}) {
    const [progress, setProgress] = useState(0)
    const [isUploading, setIsUploading] = useState(false)
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")


    const handleFileUpload = (file) => {
        const storageRef = ref(storage, `products/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
    
        setIsUploading(true)
    
        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
          }, 
          (error) => {
            console.error(error)
            setIsUploading(false)
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              saveProductData(downloadURL)
              setIsUploading(false)
            });
          }
        )
      }
    
      const saveProductData = async (imageUrl) => {
        try {
          await addDoc(collection(db, 'products'), {
            name: productName,
            price: productPrice,
            imageUrl: imageUrl,
          })
          setProductName('')
          setProductPrice('')
          onSave()
          alert('Produto adicionado com sucesso!')
        } catch (error) {
          console.error("Erro ao adicionar produto: ", error)
        }
      }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target.elements.image.files[0]
        if (file) {
          handleFileUpload(file)
        } else {
          alert('Por favor, selecione uma imagem.')
        }
    }

        return (
          <>
              <h2>Adicionar produto</h2>
              <FormContainer onSubmit={handleSubmit}>
                
                <FormInput
                  type="text"
                  placeholder="Produto"
                  id="product_name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
                
                
                <FormInput
                  type="number"
                  placeholder="Preço"
                  id="product_price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  required
                />
                
                
                
                <FormInput type="file" name="image" required />
                
                <FormButton type="submit">Adicionar</FormButton>
                <DeleteButton type="button" onClick={onCancel}>
                  Cancelar
                </DeleteButton>
                {isUploading && <p>Progresso: {progress}%</p>}
              </FormContainer>
          </>
        )
}