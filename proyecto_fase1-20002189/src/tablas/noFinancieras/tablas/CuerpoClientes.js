import { React, useState, useEffect} from "react";
import PlantillaDatosClientes from "../plantillasDatos/PlantillaDatosClientes.js";

const CuerpoClientes = () =>{
    const [listaClients, setListaClients] = useState([]);
    let dataClients = [];

    useEffect(()=>{

        const retrieveDataClients = async() =>{
            try {
                const reqOpts = {
                    method: 'GET',
                    mode: 'cors',
                    headers: {'Content-Type': 'application/json'},
                    body: undefined
                };

                const respuesta = await fetch('http://localhost:5000/api/clients/', reqOpts);
                const data = await respuesta.json();

                data.forEach(x => dataClients.push(x));
                setListaClients(dataClients);

            } catch (err) {
                console.log(err);
            }
        }
        retrieveDataClients();
    }
    ,[]);
    
    useEffect(()=>{
        console.log(listaClients);
    }
    ,[listaClients]);

    return(
        <tbody>
            {listaClients?.map((asd, indice) => <PlantillaDatosClientes
                id={listaClients[indice]._id}
                nombre={listaClients[indice].nombre}
                apellido={listaClients[indice].apellido}
                telefono={listaClients[indice].telefono}
                email={listaClients[indice].email}
                empresa={listaClients[indice].empresa}
                pagoPreferido={listaClients[indice].pagoPreferido}
            />)}
        </tbody>
    );
}

export default CuerpoClientes;