import { useState, useEffect } from "react";
import { addClient } from "../services/clientes";
import {v4 as GeneradorID} from 'uuid'

export const useAddClient = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [img, setImg] = useState('')
    const [solicitud, setSolicitud] = useState(null)

    const manejarNombre = (e) => {
        setNombre(e.target.value)
    }

    const manejarCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const manejarImg = (e) => {
        setImg(e.target.value)
    }

    const manejarEnvioDeDatos = async (e) => {
        e.preventDefault()

        const nuevoCliente = {
            nombre: nombre,
            email: correo,
            img: img,
            id: GeneradorID()
        }

        const estadoSolicitud = await addClient(nuevoCliente)

        setSolicitud(estadoSolicitud)
    }

    useEffect(() => {
        if (solicitud) {
            const timer = setTimeout(() => setSolicitud(null),5000)
            setCorreo('')
            setNombre('')
            return () => clearTimeout(timer) 
        }    
    }, [solicitud])

    return {
        nombre, correo, img, solicitud, manejarNombre, manejarCorreo, manejarImg, manejarEnvioDeDatos
    }
}