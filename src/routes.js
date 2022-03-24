import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/404";
import { Main } from "./pages/Main";
import { Header } from './Components/Header';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { Footer } from "./Components/Footer";

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="*" element={<ErrorPage />} />
            </Routes>
            <ToastContainer
            position="bottom-center"
            autoClose={3000}
            />
            <Footer />
        </BrowserRouter>
    )
}