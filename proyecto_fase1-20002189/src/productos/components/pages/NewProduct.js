import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import './NewProduct.css';

const NewProduct = (props) =>{
    const history = useHistory();

    const [nombreProd, setNombreProd]  = useState('');
    const [tipoProd, setTipoProd]  = useState('');
    const [fechaSiembra, setFechaSiembra]  = useState('');
    const [fechaCosecha, setFechaCosecha]  = useState('');
    const [diasUtil, setDiasUtil]  = useState('');
    const [precio, setPrecio]  = useState('');

    const newProductSubmitHandler = async(event) =>{
        {event.preventDefault();
            try {
                const reqOpts = {
                    method: 'POST',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({nombreProd: nombreProd, 
                                            tipoProd: tipoProd,
                                            fechaSiembra: fechaSiembra,
                                            fechaCosecha: fechaCosecha,
                                            diasUtil: diasUtil,
                                            precio: precio})
                };

                const respuesta = await fetch('http://localhost:5000/api/products/', reqOpts);
                const data = await respuesta.json();
                console.log(data.mensaje);

                //history.push('/productos');
                
            } catch (err) {
                console.log(err);
            }
        }
    }

    return(
        <div>
            <div className="tituloNewProduct">
                <h1>Agregar nuevo producto</h1>
            </div>
            <div className="cuadroNewProduct">
                <form onSubmit={newProductSubmitHandler}>
                    <table>
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
                                <button className="ingresoProduct">Agregar Producto</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>

        </div>
    );
}

export default NewProduct;