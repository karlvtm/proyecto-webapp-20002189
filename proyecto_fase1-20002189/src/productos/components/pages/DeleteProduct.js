import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import './DeleteProduct.css';

const DeleteProduct = (props) =>{
    const [id, setId] = useState('');

    const submitDeleteHandler = async(event) =>{
        event.preventDefault();

        const reqOpts = {
            method: 'DELETE',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: undefined
        };

        const respuesta = await fetch(`http://localhost:5000/api/products/${id}`, reqOpts);
        const data = await respuesta.json();
        console.log(data);

    }

    return(
        <div>
            <div className="tituloDeleteProduct">
                <h1>Eliminar un producto existente</h1>
            </div>
            <div className="cuadroDeleteProduct">
                <form onSubmit={submitDeleteHandler}>
                    <table>
                        <tr>
                            <td>
                                <input type="text" placeholder="ID del producto a eliminar" value={id} onInput={e => setId(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink to="/productos">
                                    Volver
                                </NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="EliminarProduct">Eliminar Producto</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>

        </div>
    );
}

export default DeleteProduct;