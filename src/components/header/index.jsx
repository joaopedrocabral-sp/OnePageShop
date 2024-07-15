import { ExitButton, HeaderContainer } from "./styles";
import { ButtonModeToggler } from "../buttonModeToggler";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { signOut } from "firebase/auth";
import { useLocation } from 'react-router-dom';
import { auth } from "../../services/firebaseConfig";

export function Header({ theme, themeToggler }) {

    const [userLogged, setUserLogged] = useState(null)
    const [addProduct, setAddProduct] = useState(null)

    const handleAdd = () => {
        setAddProduct(true)
    }

    const location = useLocation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLogged(user.uid);
            } else {
                setUserLogged("");
            }
        });

        return () => unsubscribe();
    }, []);

    if (userLogged === null || userLogged === "" || location.pathname === "/") {
        return (
            <HeaderContainer>
                <div className="header-boxed header-flex-container">
                    <p>OnePageShop</p>
                    <ButtonModeToggler theme={theme} themeToggler={themeToggler} />
                </div>
            </HeaderContainer>
        )
    } else if (userLogged) {
        return (
            <HeaderContainer>
                <div className="header-boxed header-flex-container">
                    <p>OnePageShop</p>
                    <div className="row-flex-container">

                        <ButtonModeToggler theme={theme} themeToggler={themeToggler} />
                        <ExitButton onClick={() => signOut(auth)}>Sair</ExitButton>
                    </div>
                </div>
            </HeaderContainer>
        )
    }


}