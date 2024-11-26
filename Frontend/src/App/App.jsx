import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import {Caixa} from '../Styles/App.js'

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import Home from "../Components/Home";
import Contato from "../Components/Contato";
import Login from "../Components/Login";
import Register from "../Components/Register";

//rotas da pag Home
import PagAddEventos from "../Components/PagAddEventos";
import PagAddEventosEmpreendedorismo from "../Components/PagEventosEmpreendedorismo";
import PagAddEventosGeral from "../Components/PagEventosGeral";
import PagAddEventosTec from "../Components/PagEventosTecnologia";



const App = () => {
    return(
        <Caixa>
            <BrowserRouter>
            <Container>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="contato" element={<Contato/>}/>
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="PagAddEventos" element={<PagAddEventos/>} />
                <Route path="PagEventosEmpreendedorismo" element={<PagAddEventosEmpreendedorismo/>} />
                <Route path="PagEventosGeral" element={<PagAddEventosGeral/>} />
                <Route path="PagEventosTec" element={<PagAddEventosTec/>} />
                <Route path="PagLogin" element={<Login/>} />
            </Routes>
            <Footer/>
            </Container>
        </BrowserRouter>
        </Caixa>
)
}

export default App;