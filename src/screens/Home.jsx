import styled from "styled-components";
import TablaClientes from "../components/Tabla";
import React from 'react'
import Footer from "../components/Footer";

const ContenedorPrincipal = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
background-color: #f8f9b3;
padding: 14rem 0;
gap: 4rem;
`

const TituloPrincipal = styled.h1`
    font-size: 5rem;
    color: #b19a3ea8;
    font-style: italic;
    font-family: "Michroma", sans-serif;

    @media screen and (max-width:480px) {
        font-size: 3rem;
    }
`

const Home = () => {
    return <>
        <ContenedorPrincipal>
            <TituloPrincipal>CLIENTS</TituloPrincipal>
            <TablaClientes />
        </ContenedorPrincipal>
        <Footer />
    </>

}

export default Home