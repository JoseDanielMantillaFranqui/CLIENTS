import styled from "styled-components";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useClientes } from "../hooks/useClientes";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { deleteClient } from "../services/clientes";
import { TiDelete } from "react-icons/ti";
import React from 'react'
import { CircularProgress } from "@mui/material";


const StyledCeldaTabla = styled(TableCell)`
    && {
        color: #f4f2b9;
        text-align: center;
    font-family: "Michroma", sans-serif;

    }
`

const CeldaBotones = styled(StyledCeldaTabla)`
  && {
    display: flex;
    gap: 3rem; 
    justify-content: center;
  }
`

const BotonEliminar = styled(MdDeleteForever)`
  color: #f4f2b9;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #a11b1b;
  }
`

const BotonEditar = styled(FaEdit)`
    color: #f4f2b9;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #76600ba8;
  }
`

const TituloCeldaPrincipal = styled.a`
  background-color: #f8f9b3;
  color: #a98d1da8;
  font-size: 1.5rem;
  padding: .3rem .5rem .5rem .5rem;
  border-radius: 20px;
  width: max-content;
  font-family: "Michroma", sans-serif;

`

const CeldaPrincipal = styled(TableCell)`
  && {
    text-align: center;
  }
`

const EnlaceAgregarCliente = styled(Link)`
  text-decoration: none;
  background-color: #f8f9b3;
  color: #a98d1da8;
  font-size: 1.5rem;
  padding: .3rem .5rem .5rem .5rem;
  border-radius: 20px;
  transition: .5s all;
  font-family: "Michroma", sans-serif;


  &:hover {
    background-color: #a98d1da8;
    color: #f8f9b3;
  }
`

const EnlaceEditarCliente = styled(Link)`
    text-decoration: none;
`

const TablaContenedor = styled(TableContainer)`
  && {
  width: 830px;
  @media screen and (max-width: 480px) {
    width: 320px;
  }
  }
`

const ImgCliente = styled.img`
  width:17%;
  border-radius: 100px;
  cursor: pointer;
  aspect-ratio: 5/5;
`

const ImgClienteFullScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #00000070;
  top: 0;
  left: 0;
`

const ImgClienteFullScreen = styled.img`
  width: 40%;
  border-radius: 100%;
  aspect-ratio: 5/5;

  @media screen and (max-width:480px) {
    width: 70%;
  }
`

const BotonQuitarFullScreen = styled(TiDelete)`
  position: absolute;
  top: 20px;
  right: 35px;
  font-size: 3rem;
  color: #5f5e04;
  cursor: pointer;

  &:hover {
    color: #4a4901;
  }
`

const Cargando = styled(CircularProgress)`
  && {
    color: #a98d1da8;
  }
`

const CargandoContainer = styled(TableCell)`
  && {
  padding: 2rem 0;
  text-align: center;
  }
`

const TablaClientes = () => {

    const {clientes, eliminarCliente, imgCliente, imgFullScreen, manejarImgFullScreen, ocultarImgFullScreen} = useClientes()
    return <>
    <TablaContenedor component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{background: '#a98d1da8'}} >
        <TableHead>
          <TableRow>
            <CeldaPrincipal><TituloCeldaPrincipal>IMAGEN</TituloCeldaPrincipal></CeldaPrincipal>
            <CeldaPrincipal><TituloCeldaPrincipal>NOMBRE</TituloCeldaPrincipal></CeldaPrincipal>
            <CeldaPrincipal><TituloCeldaPrincipal>CORREO</TituloCeldaPrincipal></CeldaPrincipal>
            <CeldaPrincipal><EnlaceAgregarCliente to='/agregarCliente'>AGREGAR</EnlaceAgregarCliente></CeldaPrincipal>
          </TableRow>
        </TableHead>
        <TableBody>
            {
               clientes[0]?.nombre ? clientes.map((cliente, index) => {
                   return <TableRow key={index}>
                        <StyledCeldaTabla><ImgCliente src={cliente.img} onClick={() => manejarImgFullScreen(cliente.id)}/></StyledCeldaTabla>
                        <StyledCeldaTabla>{cliente.nombre}</StyledCeldaTabla>
                        <StyledCeldaTabla>{cliente.email}</StyledCeldaTabla>
                        <CeldaBotones>
                          <EnlaceEditarCliente to={`/editarCliente/${cliente.id}`}><BotonEditar /></EnlaceEditarCliente>
                          <BotonEliminar onClick={() => {  
                            eliminarCliente(cliente.id)
                            }} />
                        </CeldaBotones>
                    </TableRow>
                })

                :

                <TableRow>
                  <CargandoContainer><Cargando /></CargandoContainer>
                  <CargandoContainer><Cargando /></CargandoContainer>
                  <CargandoContainer><Cargando /></CargandoContainer>
                  <CargandoContainer><Cargando /></CargandoContainer>

                </TableRow>
            }
            {
              imgFullScreen === true && <ImgClienteFullScreenContainer>
                <ImgClienteFullScreen src={imgCliente} />
                <BotonQuitarFullScreen onClick={ocultarImgFullScreen}/>
              </ImgClienteFullScreenContainer>
            }
        </TableBody>
      </Table>
    </TablaContenedor>
    </>
}

export default TablaClientes