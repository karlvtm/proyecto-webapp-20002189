import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";

import './UpdateProduct.css';

const UpdateProduct = (props) =>{
    const [id, setId] = useState('');
    const [nombreProd, setNombreProd] = useState('');
    const [tipoProd, setTipoProd]  = useState('');
    const [fechaSiembra, setFechaSiembra]  = useState('');
    const [fechaCosecha, setFechaCosecha]  = useState('');
    const [diasUtil, setDiasUtil]  = useState('');
    const [precio, setPrecio]  = useState('');

    const submitUpdateHandler = async(event) =>{
        event.preventDefault();

        const reqOpts = {
            method: 'PATCH',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nombreProd: nombreProd, 
                                    tipoProd: tipoProd,
                                    fechaSiembra: fechaSiembra,
                                    fechaCosecha: fechaCosecha,
                                    diasUtil: diasUtil,
                                    precio: precio})
        };

        const respuesta = await fetch(`http://localhost:5000/api/products/${id}`,reqOpts);
        const data = await respuesta.json();
        console.log(data);
    }

    return(
        <div>
            <div className="tituloUpdateProduct">
                <h1>Actualizar un producto existente</h1>
            </div>
            <div className="cuadroUpdateProduct">
                <form onSubmit={submitUpdateHandler}>
                    <table>
                        <tr>
                            <td>
                                <input type="text" placeholder="ID del producto a actualizar" value={id} onInput={e => setId(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="Nombre" value={nombreProd} onInput={e => setNombreProd(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="Tipo" value={tipoProd} onInput={e => setTipoProd(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="Date" placeholder="Fecha Siembra" value={fechaSiembra} onInput={e => setFechaSiembra(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="Date" placeholder="Fecha Cosecha" value={fechaCosecha} onInput={e => setFechaCosecha(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="Días de utilidad" value={diasUtil} onInput={e => setDiasUtil(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" placeholder="Precio" value={precio} onInput={e => setPrecio(e.target.value)}/>
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
                                <button className="actualizarProduct">Actualizar Producto</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>

        </div>
    );
}

export default UpdateProduct;