import { Button } from "./styles";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export function ButtonModeToggler({theme, themeToggler}) {
    return (
        <Button onClick={themeToggler}>
            {theme == "light" ? (
                <MdOutlineDarkMode />
            ) : (
                <MdOutlineLightMode />
            )}
        </Button>
    )
}