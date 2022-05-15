import { React, useState, useEffect} from "react";
import PlantillaDatosIngresos from '../PlantillasDatos/PlantillaDatosIngresos.js'

const CuerpoIngresos = () =>{
    const [listaIngresos, setListaIngresos] = useState([]);
    let dataIngresos = [];

    useEffect(()=>{

        const retrieveDataIngresos = async() =>{
            try {
                const reqOpts = {
                    method: 'GET',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: undefined
                };

                const respuesta = await fetch('http://localhost:5000/api/ingresos/', reqOpts);
                const data = await respuesta.json();

                data.forEach(x => dataIngresos.push(x));
                setListaIngresos(dataIngresos);

            } catch (err) {
                console.log(err);
            }
        }
        retrieveDataIngresos();
    }
    ,[]);
    
    useEffect(()=>{
        console.log(dataIngresos);
    }
    ,[dataIngresos]);


    return(
        <tbody>
            {listaIngresos?.map((asd, indice) => <PlantillaDatosIngresos
                id={listaIngresos[indice]._id}
                cliente={listaIngresos[indice].cliente}
                producto={listaIngresos[indice].producto}
                pUnitario={listaIngresos[indice].pUnitario}
                cantidad={listaIngresos[indice].cantidad}
                total={listaIngresos[indice].total}
            />)}
        </tbody>
    );
}

export default CuerpoIngresos;