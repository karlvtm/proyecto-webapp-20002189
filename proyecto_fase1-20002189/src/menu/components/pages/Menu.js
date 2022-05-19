import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context.js";

import './Menu.css';

const Menu = () =>{
    const logout = useContext(AuthContext);

    const cerrarSesion = async(event) =>{
        event.preventDefault();
        logout.logout();
    }

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
                        {/*<form onSubmit={cerrarSesion}>*/}
                            <button className="seleccion" onClick={cerrarSesion}>Cerrar Sesión</button>
                        {/*</form>*/}
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