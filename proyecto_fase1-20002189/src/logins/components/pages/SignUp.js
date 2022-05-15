import React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import './SignUp.css';
import { AuthContext } from '../../../shared/context/auth-context.js';

const SignUp = (props) =>{
    const ingreso = useContext(AuthContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const submitNewUserHandler = async(event) =>{
        event.preventDefault();

        try {
            const reqOpts = {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    nombre: nombre, 
                    apellido: apellido,
                    userName: userName,
                    password: password
                })
            };

            const respuesta = await fetch('http://localhost:5000/api/users/signUp', reqOpts);
            const data = await respuesta.json();
            console.log(data.user._id);
            console.log(data);
            ingreso.login(data.user._id, data.user.token);

        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div>
            <div className="tituloSignUp">
                <h1>Inicio de Sesión</h1>
            </div>
            <div className="cuadroSignUp">
                <form onSubmit={submitNewUserHandler}>
                    <table>
                        <tr>
                            <td>
                                <h3>Nombre</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={nombre} onInput={e => setNombre(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Apellido</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={apellido} onInput={e => setApellido(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Usuario</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={userName} onInput={e => setUserName(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Contraseña</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" value={password} onInput={e => setPassword(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <p className="cambiosignup">Ingresar con una cuenta existente</p>
                            <NavLink className="cambiosignup" to="/Login" exact>
                                Log In
                            </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="ingreso">Ingresar</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>

        </div>
    );
}

export default SignUp;