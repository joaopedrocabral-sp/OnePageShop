import { DeleteButton, EditButton, AddProductButton, ProductContainer } from "./styles";
import { auth, db, storage } from "../../services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { EditProductForm } from "../../components/editProduct";
import { AddProduct } from "../../components/addProduct";
import { formatCurrency } from "../../hooks/formatCurrency";

export function Admin() {

    const [userLogged, setUserLogged] = useState(null)
    const [products, setProducts] = useState([])
    const [editingProduct, setEditingProduct] = useState(null)
    const [addProduct, setAddProduct] = useState(null)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLogged(user.uid)
                fetchProducts()
            } else {
                setUserLogged("")
            }
        })

        return () => unsubscribe()
    }, [])

    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        setProducts(productsList)
    }

    const handleDelete = async (id, imageUrl) => {
        try {
            await deleteDoc(doc(db, 'products', id))

            if (imageUrl) {
                const storageRef = ref(storage, imageUrl)
                console.log(storageRef)
                await deleteObject(storageRef)
            }

            setProducts(products.filter(product => product.id !== id))
            alert('Produto deletado com sucesso!')
        } catch (error) {
            console.error('Erro ao deletar produto: ', error)
        }
    }

    const handleEdit = (product) => {
        setEditingProduct(product)
    }

    const handleAdd = () => {
        setAddProduct(true)
    }

    const handleSave = () => {
        setEditingProduct(null)
        setAddProduct(null)
        fetchProducts()
    }

    const handleCancel = () => {
        setEditingProduct(null)
        setAddProduct(null)
    }


    if (userLogged === null) {
        return <div>Loading...</div>
    }

    if (userLogged) {
        return (
            <>
                <div className="section-boxed-thin flex-container">
                    {editingProduct ? (
                        <EditProductForm
                            product={editingProduct}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    ) : addProduct ? (
                        <AddProduct
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                    ) : (
                        <>
                            <AddProductButton onClick={handleAdd}>Adicionar Produto</AddProductButton>
                            <h2>Lista de Produtos</h2>
                            <div className="grid-container-3 w-65 gap-50">

                                {products.map((product) => (
                                    <ProductContainer key={product.id}>
                                        {product.imageUrl && (
                                            <img
                                                src={product.imageUrl}
                                                alt={product.name}
                                            />
                                        )}
                                        <h3>{product.name}</h3>
                                        <p className="price">Preço: {formatCurrency(product.price)}</p>
                                        <br />
                                        <EditButton
                                            className="mb-10"
                                            onClick={() => handleEdit(product)}
                                        >
                                            Editar
                                        </EditButton>
                                        <br />
                                        <DeleteButton
                                            onClick={() =>
                                                handleDelete(
                                                    product.id,
                                                    product.imageUrl
                                                )
                                            }
                                        >
                                            Excluir
                                        </DeleteButton>
                                    </ProductContainer>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </>
        )
    } else if (userLogged === "") {
        window.location.assign("/login")
    }

}