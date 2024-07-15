import { HeroSection, StandardSection, ProductContainer } from "./styles";
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../services/firebaseConfig";
import heroImage from "../../assets/hero-image.jpg";
import { WhatsAppButton } from "../../components/whatsappButton";
import { formatCurrency } from "../../hooks/formatCurrency";


export function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        document.getElementById("hero-img").style.backgroundImage = `linear-gradient(to bottom, rgb(42, 10, 145, .5), rgb(0, 0, 0, 1)), url("${heroImage}")`
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'products'))
        const productsList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setProducts(productsList)
    }


    return (
        <>
            <HeroSection id="hero-img">
                <div className="section-boxed flex-container">
                    <h1>OnePageShop</h1>
                    <p>Se você está procurando os últimos modelos de celulares, nossa seleção cuidadosamente curada tem algo para todos. <b>Compre com confiança e aproveite um atendimento ao cliente incomparável e preços competitivos.</b></p>
                    <button><a href="https://github.com/joaopedrocabral-sp" target="_blank">Compre já!</a></button>
                </div>
            </HeroSection>
            <StandardSection>
                <div className="section-boxed flex-container">
                    <h2>Produtos</h2>
                    <div className="grid-container-3">

                        {products.map((product) => (
                            <ProductContainer key={product.id}>
                                {product.imageUrl && (
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                    />
                                )}
                                <h3>{product.name}</h3>
                                <p className="price">{formatCurrency(product.price)}</p>
                                <button><a href="https://github.com/joaopedrocabral-sp" target="_blank">Comprar</a></button>
                            </ProductContainer>
                        ))}
                    </div>
                </div>
            </StandardSection>
            <WhatsAppButton />
        </>
    )
}