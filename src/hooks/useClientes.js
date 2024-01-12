import { useState, useEffect } from "react"
import { getClientes, deleteClient, getCliente } from "../services/clientes"

export const useClientes = () => {
    const [clientes, setClientes] = useState([{}])
    const [imgCliente, setImgCliente] = useState({})
    const [imgFullScreen, setImgFullScreen] = useState(false)

    useEffect(() => {
        const fetchingClientes = async () => {
            const nuevosClientes = await getClientes()
            setClientes(nuevosClientes)
        }

        fetchingClientes()
    },[])

    const eliminarCliente = (id) => {
        const eliminaciónExitosa = deleteClient(id)

        if (eliminaciónExitosa) {
            const clientesActualizados = clientes.filter(cliente => cliente.id !== id)

            setClientes(clientesActualizados)
        }
    }

    const obtenerImgCliente = async (id) => {
        const nuevaImg = await getCliente(id)
        setImgCliente(nuevaImg.img)
    }

    const manejarImgFullScreen = (id) => {
        setImgFullScreen(true)
        obtenerImgCliente(id)
    }

    const ocultarImgFullScreen = () => {
        setImgFullScreen(false)
    }

    return { clientes, eliminarCliente, imgCliente, imgFullScreen, manejarImgFullScreen, ocultarImgFullScreen }
}