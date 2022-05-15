import React from "react";
import { NavLink } from "react-router-dom";

import './Productos.css';
import Header from "../../../header/Header";
import TablaProductos from "../../../tablas/tablasAExportar/TablaProductos.js";

const Productos = () => {


    return(
        <div style={{marginLeft: 95}}>
            <Header/>
            <table >
                <tr>
                    <div className="contenedorLinks">
                        <td>
                            <NavLink className="opcVistasLink" to="/NewProduct">
                                Agregar
                            </NavLink>
                            <NavLink className="opcVistasLink" to="/UpdateProduct">
                                Actualizar
                            </NavLink>
                            <NavLink className="opcVistasLink" to="/DeleteProduct" exact>
                                Eliminar
                            </NavLink>
                            <NavLink className="opcVistasLink" to="/" exact>
                                Volver
                            </NavLink>
                        </td>
                    </div>
                </tr>
                <tr>
                    <td>
                        <TablaProductos/>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Productos;