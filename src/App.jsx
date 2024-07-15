import React from "react";
import { ThemeProvider } from "styled-components";
import { toggleMode } from "./hooks/darkMode";
import { darkTheme, lightTheme } from "./styles/theme";
import { MyGlobalStyles } from "./styles/globalStyles";
import { AppRoutes } from "./routes";
import { Header } from "./components/header";

export function App() {
    const [theme, themeToggler] = toggleMode();
    const themeMode = theme == "light" ? lightTheme : darkTheme;

    return (
        <>
            <ThemeProvider theme={themeMode}>
                <MyGlobalStyles />
                <AppRoutes theme={theme} themeToggler={themeToggler} />
            </ThemeProvider>
        </>
    )
}