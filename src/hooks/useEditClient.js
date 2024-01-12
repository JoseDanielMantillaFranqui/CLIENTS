import { useState, useEffect } from "react";
import { getCliente, editClient } from "../services/clientes";
import {v4 as GeneradorID} from 'uuid'

export const useEditClient = ({ id }) => {
    const [nombreAEditar, setNombreAEditar] = useState('')
    const [correoAEditar, setCorreoAEditar] = useState('')
    const [imgAEditar, setImgAEditar] = useState('')
    const [solicitud, setSolicitud] = useState(null)


    const manejarNombreAEditar = (e) => {
          setNombreAEditar(e.target.value)
    }

    const manejarCorreoAEditar = (e) => {
        setCorreoAEditar(e.target.value)
    }

    const manejarImgAEditar = (e) => {
        setImgAEditar(e.target.value)
    }

    useEffect(() => {
        const fetchingClienteAEditar = async () => {
            const clienteAEditar = await getCliente(id)

            setNombreAEditar(clienteAEditar.nombre)
            setCorreoAEditar(clienteAEditar.email)
            setImgAEditar(clienteAEditar.img)
        }

        fetchingClienteAEditar()
    },[])

    const manejarEnvioDatos = async (e) => {
        e.preventDefault()

        const clienteEditado = {
            nombre: nombreAEditar,
            email: correoAEditar,
            img: imgAEditar,
            id: GeneradorID()
        }

        const estadoSolicitud = await editClient(clienteEditado, id)
        setSolicitud(estadoSolicitud)
    }

    useEffect(() => {
        if (solicitud) {
            const timer = setTimeout(() => setSolicitud(null),5000)

            return () => clearTimeout(timer) 
        }
    },[solicitud])

    return { 
        nombreAEditar, 
        correoAEditar,
        imgAEditar, 
        solicitud,
        manejarCorreoAEditar, 
        manejarNombreAEditar,
        manejarImgAEditar, 
        manejarEnvioDatos
     }
}