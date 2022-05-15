import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './DeleteClient.css';

const DeleteClient = (props) =>{
    const [id, setId] = useState('');

    const deleteClientHandler = async(event) =>{
        event.preventDefault();
        const reqOpts = {
            method: 'DELETE',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: undefined
        };

        const respuesta = await fetch(`http://localhost:5000/api/clients/${id}`, reqOpts);
        const data = await respuesta.json();
        console.log(data);
    }

    return(
        <div>
            <div className="tituloDeleteClient">
                <h1>Eliminar un cliente existente</h1>
            </div>
            <div className="cuadroDeleteClient">
                <form onSubmit={deleteClientHandler}>
                    <table>
                        <tr>
                            <td>
                                <input type="text" placeholder="ID" value={id} onInput={e => setId(e.target.value)}/>
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
                                <button className="DeleteCliente">Eliminar Cliente</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>

        </div>
    );
}

export default DeleteClient;