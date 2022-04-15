import React from "react";
import { NavLink } from "react-router-dom";

import './Productos.css';
import Header from "../../../header/Header";
import TablaProductos from "../../../tablas/tablasAExportar/TablaProductos.js";

const Productos = () => {
    return(
        <div className="contenedor">
            <Header/>
            <table>
                <tr>
                    <td>
                        <TablaProductos/>
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

export default Productos;