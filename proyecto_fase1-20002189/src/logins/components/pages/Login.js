import React from "react";

import './Login.css';

const Login = (props) =>{
    return(
        <div>
            <div className="titulo">
                <h1>Inicio de Sesión</h1>
            </div>
            <div className="cuadroLogin">
                <table>
                    <tr>
                        <td>
                        <h3>Usuario</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Contraseña</h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="ingreso">Ingresar</button>
                        </td>
                    </tr>
                </table>
                
            </div>

        </div>
    );
}

export default Login;