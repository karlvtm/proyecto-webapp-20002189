import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './NewClient.css';

const NewClient = (props) =>{
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [pagoPreferido, setPagoPreferido] = useState('');

    const submitNewClientHandler = async(event) =>{
        event.preventDefault();

        const reqOpts = {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nombre: nombre, 
                                    apellido: apellido,
                                    telefono: telefono,
                                    email: email,
                                    empresa: empresa,
                                    pagoPreferido: pagoPreferido})
        };

        const respuesta = await fetch('http://localhost:5000/api/clients/', reqOpts);
        const data = await respuesta.json();
        console.log(data);

        //history.push('/clientes');
    }

    return(
        <div>
            <div className="tituloNewClient">
                <h1>Agregar nuevo cliente</h1>
            </div>
            <div className="cuadroNewClient">
                <form onSubmit={submitNewClientHandler}>
                    <table>
                        <tr>
                            <td>
                                <input type="text" placeholder="Nombre" value={nombre} onInput={e => setNombre(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="Apellido" value={apellido} onInput={e => setApellido(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="Telefono" value={telefono} onInput={e => setTelefono(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="E-Mail" value={email} onInput={e => setEmail(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="Empresa" value={empresa} onInput={e => setEmpresa(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="Método de Pago Preferido" value={pagoPreferido} onInput={e => setPagoPreferido(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink to="/clientes">
                                    Volver
                                </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="ingresoCliente">Agregar Cliente</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>

        </div>
    );
}

export default NewClient;