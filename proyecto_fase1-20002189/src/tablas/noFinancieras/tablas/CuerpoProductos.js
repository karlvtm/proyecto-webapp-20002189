import { React, useState, useEffect } from "react";
import PlantillaDatosProductos from "../plantillasDatos/PlantillaDatosProductos.js";

const CuerpoProductos = () =>{
    const [listaProds, setListaProds] = useState([]);
    let dataProds = [];

    useEffect(()=>{

        const retrieveDataProds = async() =>{
            try {
                const reqOpts = {
                    method: 'GET',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: undefined
                };

                const respuesta = await fetch('http://localhost:5000/api/products/', reqOpts);
                const data = await respuesta.json();

                data.forEach(x => dataProds.push(x));
                setListaProds(dataProds);

            } catch (err) {
                console.log(err);
            }
        }
        retrieveDataProds();
    }
    ,[]);
    
    useEffect(()=>{
        console.log(listaProds);
    }
    ,[listaProds]);

    return(
        <tbody>
            {listaProds?.map((asd, indice) => <PlantillaDatosProductos 
                id={listaProds[indice]._id} 
                nombreProd={listaProds[indice].nombreProd}
                tipoProd={listaProds[indice].tipoProd}
                fechaSiembra={listaProds[indice].fechaSiembra}
                fechaCosecha={listaProds[indice].fechaCosecha}
                diasUtil={listaProds[indice].diasUtil}
                precio={listaProds[indice].precio}
            />)}
        </tbody>
    );
}

export default CuerpoProductos;