import React from "react";

import HeaderClientes from "../noFinancieras/headers/HeaderClientes.js";
import CuerpoClientes from "../noFinancieras/tablas/CuerpoClientes.js";
import './TablasStyles.css';

const TablaClientes = () =>{
    return(
        <table className="tablasSistema">
            <HeaderClientes/>
            <CuerpoClientes/>
        </table>
    );
}

export default TablaClientes;