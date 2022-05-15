import React from "react";

function PlantillaDatosProductos({id, nombreProd, tipoProd, fechaSiembra, fechaCosecha, diasUtil, precio}) {
    return(
        <tr>
            <td>{id}</td>
            <td>{nombreProd}</td>
            <td>{tipoProd}</td>
            <td>{fechaSiembra}</td>
            <td>{fechaCosecha}</td>
            <td>{diasUtil}</td>
            <td>{precio}</td>
        </tr>
    )
}

export default PlantillaDatosProductos;