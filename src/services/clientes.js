export const getClientes = () => {
    return fetch('https://clients-api-t5fq.onrender.com/perfil')
    .then(res => res.json())
    .then(data => {
        return data
    })
}

export const getCliente = (id) => {
    return fetch(`https://clients-api-t5fq.onrender.com/perfil/${id}`)
    .then (res => res.json())
    .then (data => {
        return data
    })
}

export const addClient = async (nuevoCliente) => {
    try {
        const response = await fetch('https://clients-api-t5fq.onrender.com/perfil', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(nuevoCliente)
        })

        let estadoSolicitud = null

        response.ok ? estadoSolicitud = true : estadoSolicitud = false

        return estadoSolicitud
    }

    catch (error) {
        console.error('Error en la solicitud POST:', error)
        throw error
    }
}

export const deleteClient = (id) => {
    return fetch(`https://clients-api-t5fq.onrender.com/perfil/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        let estadoSolicitud = response.ok

        return estadoSolicitud
    })
}

export const editClient = async (clienteEditado, id) => {
    try {
        const response = await fetch(`https://clients-api-t5fq.onrender.com/perfil/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(clienteEditado)
        })

        let estadoSolicitud = null

        response.ok ? estadoSolicitud = true : estadoSolicitud = false

        return estadoSolicitud
    }

    catch (error) {
        console.error('Error en la solicitud POST:', error)
        throw error
    }

}