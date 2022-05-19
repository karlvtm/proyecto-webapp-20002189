import { React, useState, useEffect } from "react";
import PlantillaDatosEgresos from "../PlantillasDatos/PlantillaDatosEgresos.js";

const CuerpoEgresos = () =>{
    const [listaEgresos, setListaEgresos] = useState([]);
    let dataEgresos = [];

    useEffect(()=>{

        const retrieveDataEgresos = async() =>{
            try {
                const reqOpts = {
                    method: 'GET',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: undefined
                };

                const respuesta = await fetch('http://localhost:5000/api/egresos/', reqOpts);
                const data = await respuesta.json();

                data.forEach(x => dataEgresos.push(x));
                setListaEgresos(dataEgresos);

            } catch (err) {
                console.log(err);
            }
        }
        retrieveDataEgresos();
    }
    ,[]);
    
    /*useEffect(()=>{
        console.log(dataEgresos);
    }
    ,[dataEgresos]);*/


    return(
        <tbody>
            {listaEgresos?.map((asd,indice) => <PlantillaDatosEgresos
                id={listaEgresos[indice]._id}
                compra={listaEgresos[indice].compra}
                descripcion={listaEgresos[indice].descripcion}
                monto={listaEgresos[indice].monto}
                responsable={listaEgresos[indice].responsable}
            />)}
        </tbody>
    );
}

export default CuerpoEgresos;