import React from "react";

import HeaderEgresos from "../Financieras/headers/HeaderEgresos.js";
import CuerpoEgresos from "../Financieras/tablas/CuerpoEgresos.js";
import './TablasStyles.css';

const TablaEgresos = () =>{
    return(
        <table className="tablasSistema">
            <HeaderEgresos/>
            <CuerpoEgresos/>
        </table>
    );
}

export default TablaEgresos;