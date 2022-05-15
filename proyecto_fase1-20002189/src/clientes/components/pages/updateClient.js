import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './updateClient.css';

const UpdateClient = (props) =>{
    const [id, setId] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [pagoPreferido, setPagoPreferido] = useState('');

    const submitUpdateClientHandler = async(event) =>{
        event.preventDefault();

        const reqOpts = {
            method: 'PATCH',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({  telefono: telefono,
                                    email: email,
                                    empresa: empresa,
                                    pagoPreferido: pagoPreferido})
        };

        const respuesta = await fetch(`http://localhost:5000/api/clients/${id}`, reqOpts);
        const data = await respuesta.json();
        console.log(data);

        //history.push('/clientes');
    }
    return(
        <div>
            <div className="tituloUpdateClient">
                <h1>Actualizar un cliente existente</h1>
            </div>
            <div className="cuadroUpdateClient">
                <form onSubmit={submitUpdateClientHandler}>
                    <table>
                        <tr>
                            <td>
                                <input type="text" placeholder="ID" value={id} onInput={e => setId(e.target.value)}/>
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
                                <button className="UpdateCliente">Actualizar Cliente</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default UpdateClient;