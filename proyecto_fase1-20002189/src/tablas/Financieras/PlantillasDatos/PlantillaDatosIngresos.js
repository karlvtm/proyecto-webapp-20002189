import React from "react";

function PlantillaDatosIngresos({id, cliente, producto, pUnitario, cantidad, total}) {
    return(
        <tr>
            <td>{id}</td>
            <td>{cliente}</td>
            <td>{producto}</td>
            <td>{pUnitario}</td>
            <td>{cantidad}</td>
            <td>{total}</td>
        </tr>
    )
}

export default PlantillaDatosIngresos;