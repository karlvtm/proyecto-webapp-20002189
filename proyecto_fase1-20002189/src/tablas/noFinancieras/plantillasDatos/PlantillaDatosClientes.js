import React from "react";

function PlantillaDatosClientes({id, nombre, apellido, telefono, email, empresa, pagoPreferido}) {
    return(
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{telefono}</td>
            <td>{email}</td>
            <td>{empresa}</td>
            <td>{pagoPreferido}</td>
        </tr>
    )
}

export default PlantillaDatosClientes;