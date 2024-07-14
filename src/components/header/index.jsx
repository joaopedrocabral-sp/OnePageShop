import { HeaderContainer } from "./styles";
import { ButtonModeToggler } from "../buttonModeToggler";

export function Header({ theme, themeToggler }) {
    return (
        <HeaderContainer>
            <div className="header-boxed header-flex-container">
                <p>OnePageShop</p>
                <ButtonModeToggler theme={theme} themeToggler={themeToggler} />
            </div>

        </HeaderContainer>
    )
}