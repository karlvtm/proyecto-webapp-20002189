import React from "react";

import './clientes.css';
import Header from "../../../header/Header";
import { NavLink } from "react-router-dom";
import TablaClientes from "../../../tablas/tablasAExportar/TablaClientes.js";

//import Datagrids from "../../../datagrid/Datagrids.js";

const Clientes = () => {
    return(
        <div className="contenedor">
            <Header/>
            <table>
                <tr>
                    <td>
                        <TablaClientes/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="opcVistas">
                            Agregar 
                        </button>
                        <button className="opcVistas">
                            Eliminar 
                        </button>
                        <NavLink className="opcVistasLink" to="/" exact>
                            Volver
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Clientes;