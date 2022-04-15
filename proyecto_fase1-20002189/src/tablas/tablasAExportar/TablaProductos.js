import React from "react";

import HeaderProductos from "../noFinancieras/headers/HeaderProductos.js";
import CuerpoProductos from "../noFinancieras/tablas/CuerpoProductos.js";
import './TablasStyles.css';

const TablaProductos = () =>{
    return(
        <table className="tablasSistema">
            <HeaderProductos/>
            <CuerpoProductos/>
        </table>
    );
}

export default TablaProductos;