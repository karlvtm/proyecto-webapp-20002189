import {React, useState, useEffect} from "react";

import TablaIngresos from "../../../tablas/tablasAExportar/TablaIngresos.js";
import TablaEgresos from "../../../tablas/tablasAExportar/TablaEgresos.js";
import TablaTotales from "../../../tablas/tablasAExportar/TablaTotales.js";
import './Ventas.css';

const Ventas = () =>{
    const [cliente, setCliente] = useState('');
    const [producto, setProducto] = useState('');
    const [pUnitario, setPUnitario] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [total, setTotal] = useState('');

    const submitIncomeHandler = async(event) =>{
        event.preventDefault()

        try {
            const reqOpts = {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({  cliente: cliente, 
                                        producto: producto,
                                        pUnitario: pUnitario,
                                        cantidad: cantidad,
                                        total: total})
            };

            const respuesta = await fetch('http://localhost:5000/api/ingresos/', reqOpts);
            const data = await respuesta.json();
            console.log(data.mensaje);
            
        } catch (err) {
            console.log(err);
        }
    }

    const [compra, setCompra] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    const [responsable, setResponsable] = useState('');

    const submitOutcomeHandler = async(event) =>{
        event.preventDefault()

        try {
            const reqOpts = {
                method: 'POST',
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({  compra: compra, 
                                        descripcion: descripcion,
                                        monto: monto,
                                        responsable: responsable})
            };

            const respuesta = await fetch('http://localhost:5000/api/egresos/', reqOpts);
            const data = await respuesta.json();
            console.log(data.mensaje);
            
        } catch (err) {
            console.log(err);
        }

    }

    return(
        <div>
            <table className="balance">
                <tr>
                    <td>
                        <TablaIngresos/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <form onSubmit={submitIncomeHandler}>
                            <p>Nueva Venta:</p>
                            <input type="text" placeholder="Cliente" value={cliente} onInput={e => setCliente(e.target.value)}/>
                            <input type="text" placeholder="Producto" value={producto} onInput={e => setProducto(e.target.value)}/>
                            <input type="text" placeholder="Precio Unitario" value={pUnitario} onInput={e => setPUnitario(e.target.value)}/>
                            <input type="text" placeholder="Cantidad" value={cantidad} onInput={e => setCantidad(e.target.value)}/>
                            <input type="text" placeholder="Total" value={total} onInput={e => setTotal(e.target.value)}/>
                            <button>+</button>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        <TablaEgresos/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <form onSubmit={submitOutcomeHandler}>
                            <p>Nuevo Gasto:</p>
                            <input type="text" placeholder="Compra" value={compra} onInput={e => setCompra(e.target.value)}/>
                            <input type="text" placeholder="Descripción" value={descripcion} onInput={e => setDescripcion(e.target.value)}/>
                            <input type="text" placeholder="Monto" value={monto} onInput={e => setMonto(e.target.value)}/>
                            <input type="text" placeholder="Responsable" value={responsable} onInput={e => setResponsable(e.target.value)}/>
                            <button>+</button>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        {/* <p>Total:</p> */}
                        <TablaTotales/>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Ventas;