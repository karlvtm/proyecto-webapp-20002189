import React from "react";

import TablaIngresos from "../../../tablas/tablasAExportar/TablaIngresos.js";
import TablaEgresos from "../../../tablas/tablasAExportar/TablaEgresos.js";
import TablaTotales from "../../../tablas/tablasAExportar/TablaTotales.js";
import './Ventas.css';

const Ventas = () =>{
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
                        <p>Nueva Venta:</p>
                        <input type="text" ></input>
                        <button>+</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <TablaEgresos/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p>Nuevo Gasto:</p>
                        <input type="text" ></input>
                        <button>+</button>
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