import React from "react";
import { NavLink } from "react-router-dom";

import './Menu.css';

const Menu = () =>{
    return(
        <div>
            <div className="titulo">
                <h1>Menú</h1>
            </div>
            <table className="opciones">
                <tr>
                    <td>
                        <NavLink className="seleccion" to="/productos">Inventario</NavLink>
                    </td>
                    <td>
                        <button className="dudas">?</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="seleccion" to="/ventas">Finanzas</NavLink>
                    </td>
                    <td>
                        <button className="dudas">?</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="seleccion" to="/clientes">Clientes</NavLink>
                    </td>
                    <td>
                        <button className="dudas">?</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="seleccion" to="/" exact>Otros</NavLink>
                    </td>
                    <td>
                        <button className="dudas">?</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="seleccion" to="/login" exact>Cerrar Sesion</NavLink>
                    </td>
                    <td>
                        <button className="dudas">?</button>
                    </td>
                </tr>
            </table>    
        </div>
    );
}

export default Menu;