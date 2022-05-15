import React from "react";

import './clientes.css';
import Header from "../../../header/Header";
import { NavLink } from "react-router-dom";
import TablaClientes from "../../../tablas/tablasAExportar/TablaClientes.js";

const Clientes = () => {
    return(
        <div style={{marginLeft: 140}}>
            <Header/>
            <table>
                <tr>
                    <div className="contenedorLinks">
                        <td>
                            <NavLink className="opcVistasLink" to="/NewClient" exact>
                                Agregar
                            </NavLink>
                            <NavLink className="opcVistasLink" to="/updateClient" exact>
                                Actualizar
                            </NavLink>
                            <NavLink className="opcVistasLink" to="/DeleteClient" exact>
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
                        <TablaClientes/>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Clientes;