import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Header } from "./components/header";
import { Admin } from "./pages/admin";

export function AppRoutes({theme, themeToggler}) {
    return (
        <BrowserRouter>
            <Header theme={theme} themeToggler={themeToggler} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}