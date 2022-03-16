import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/404";
import { Main } from "./pages/Main";
import { Header } from './Components/Header';

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}