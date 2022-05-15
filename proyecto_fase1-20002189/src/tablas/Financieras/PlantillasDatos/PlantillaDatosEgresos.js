import React from "react";

function PlantillaDatosEgresos({id, compra, descripcion, monto, responsable}) {
    return(
        <tr>
            <td>{id}</td>
            <td>{compra}</td>
            <td>{descripcion}</td>
            <td>{monto}</td>
            <td>{responsable}</td>
        </tr>
    )
}

export default PlantillaDatosEgresos;