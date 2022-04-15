import React from "react";

import HeaderIngresos from "../Financieras/headers/HeaderIngresos.js";
import CuerpoIngresos from "../Financieras/tablas/CuerpoIngresos.js";
import './TablasStyles.css';

const TablaClientes = () =>{
    return(
        <table className="tablasSistema">
            <HeaderIngresos/>
            <CuerpoIngresos/>
        </table>
    );
}

export default TablaClientes;