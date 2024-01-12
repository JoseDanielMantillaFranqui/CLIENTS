import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useAddClient } from "../hooks/useAddClient";
import React from 'react'

const StyledFormulario = styled.form`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    position:relative;

    @media screen and (max-width:480px) {
        width: 80%;
    }
`

const StyledInput = styled(TextField)`
    && {
        label {
            color: #a98d1da8;
            font-size: 1.5rem;
        }

        input {
            color: #a98d1de2;
            font-size: 1.7rem;
        }

        & .MuiInputBase-root.MuiFilledInput-root:after {
            border-bottom: 2px solid #a98d1da8 !important;
            transform: scaleX(1);
        }
    }
`

const BotonAgregar = styled(Button)`
    && {
        background-color: #a98d1da8;
        transform: scale(1.3);
    }

    &&:hover {
        background-color: #a98d1d;
    }
`

const SolicitudExitosa = styled.p`
    padding: 3rem;
    font-size: 3rem;
    background-color: #a98d1d;
    color: #fbfda4;
    border: 5px solid #5e4d0be6;
    border-radius: 20px;
    width: 300px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
`

const ContainerSolicitudExitosa = styled.section`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh; 
    background-color: #00000068;
    top: 0;
    left: 0;
`

const FormularioAgregarCliente = () => {

    const { nombre, correo, img, solicitud, manejarNombre, manejarCorreo, manejarImg, manejarEnvioDeDatos } = useAddClient()

    return <StyledFormulario onSubmit={manejarEnvioDeDatos}>
    <StyledInput id="filled-basic" label="Nombre" variant="filled"  value={nombre} onChange={manejarNombre}/>
    <StyledInput id="filled-basic" label="Correo Electrónico" variant="filled" value={correo} onChange={manejarCorreo} />
    <StyledInput id="filled-basic" label="URL de Imagen" variant="filled" value={img} onChange={manejarImg} />
    <BotonAgregar variant="contained" type="submit">AGREGAR</BotonAgregar>
    {solicitud === true && <ContainerSolicitudExitosa><SolicitudExitosa>CLIENTE AGREGADO CON ÉXITO</SolicitudExitosa></ContainerSolicitudExitosa>}
</StyledFormulario>
}

export default FormularioAgregarCliente