import { Button } from "./styles";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export function ButtonModeToggler({theme, themeToggler}) {
    return (
        <Button onClick={themeToggler}>
            {theme == "light" ? (
                <MdOutlineDarkMode style={{ fontSize: "30px", marginTop: "4px" }} />
            ) : (
                <MdOutlineLightMode style={{ fontSize: "30px", marginTop: "4px" }} />
            )}
        </Button>
    )
}