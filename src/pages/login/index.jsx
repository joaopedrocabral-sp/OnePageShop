import { FormContainer, FormInput, FormButton } from "./styles";
import { auth } from "../../services/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { useState, useEffect } from "react";

export function Login() {

    const [userLogged, setUserLogged] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserLogged(user.uid)
            } else {
                setUserLogged("")
            }
        })

        return () => unsubscribe()
    }, [])

    const [emailInput, setEmailInput] = useState("")
    const [passInput, setPassInput] = useState("")

    function loginHandler(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, emailInput, passInput)
            .then((result) => {
                window.location.assign("/admin")
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
    }

    if (userLogged === null) {
        return <div>Loading...</div>
    }

    if (userLogged) {
        window.location.assign("/admin")
    }

    else if (userLogged === "") {
        return (
            <div className="section-boxed-thin flex-container">
                <FormContainer onSubmit={loginHandler}>
                    <h2 className="color-g">Fazer Login</h2>
                    <FormInput
                        type="text"
                        id="email"
                        placeholder="E-Mail"
                        value={emailInput}
                        onChange={e => setEmailInput(e.target.value)}
                    />
                    <FormInput
                        type="password"
                        id="password"
                        placeholder="Senha"
                        value={passInput}
                        onChange={e => setPassInput(e.target.value)}
                    />
                    <FormButton type="submit">Acessar</FormButton>
                </FormContainer>
            </div>
        )
    }

}