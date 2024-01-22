import { IoArrowBackCircle } from "react-icons/io5";
import styled from "styled-components";
import FormularioAgregarCliente from "../components/AddClientForm";
import { Link } from "react-router-dom";
import React from 'react'
import Footer from "../components/Footer";


const ContenedorPrincipal = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
background: linear-gradient(180deg,#f8f9b3, #9c821ea9);
padding: 15rem 0;
gap: 4rem;
`

const TituloPrincipal = styled.h1`
    font-size: 3rem;
    color: #a98d1da8;
    font-style: italic;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
`

const BotonVolverAHomePage = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 20px;
  left: 35px;
  font-size: 4rem;
  color: #5f5e04;
  cursor: pointer;

  &:hover {
    color: #4a4901;
  }
`



const AddClient = () => {
    return <>
      <ContenedorPrincipal>
          <TituloPrincipal>AGREGAR CLIENTE</TituloPrincipal>
          <FormularioAgregarCliente/>
          <BotonVolverAHomePage to='/'><IoArrowBackCircle/></BotonVolverAHomePage>
      </ContenedorPrincipal>
      <Footer />
    </> 

}

export default AddClient