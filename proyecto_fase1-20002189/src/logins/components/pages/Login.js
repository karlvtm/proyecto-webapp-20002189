import React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import './Login.css';
import { AuthContext } from '../../../shared/context/auth-context.js';

const Login = (props) =>{
    const ingreso = useContext(AuthContext);

    const [nombre, setNombre] = useState('');
    const [pass, setPass] = useState('');

    const loginSubmitHandler = async(event) =>{
        event.preventDefault();
        try {
            const reqOpts = {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({userName: nombre, password: pass})
            };

            const respuesta = await fetch('http://localhost:5000/api/users/login', reqOpts);
            const data = await respuesta.json();
            //console.log(data.userId);
            //console.log(data.token);
            //console.log(data.message);
            ingreso.login(data.userId, data.token);


        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div>
            <div className="tituloLogin">
                <h1>Inicio de Sesión</h1>
            </div>
            <div className="cuadroLogin">
                <form onSubmit={loginSubmitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>Usuario</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="userName" type="text" value={nombre} onInput={e => setNombre(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>Contraseña</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="password" type="password" value={pass} onInput={e => setPass(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="cambiosignup">Desea agregar una cuenta nueva?</p>
                                    <NavLink className="cambiosignup" to="/SignUp">
                                        Sign Up
                                    </NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="ingreso">Ingresar</button>
                                    <NavLink className="cambiosignup" to="/">
                                        MENU
                                    </NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Login;