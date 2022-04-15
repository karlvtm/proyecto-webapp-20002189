import { v4 } from "uuid";
import { validationResult } from "express-validator";

import HttpError from '../models/HttpError.js';

let CLIENTS = [
    {
        id: "a",
        nombre: "adsf",
        apellido: "asdf",
        telefono: "1234-4565",
        email: "asdf@dfsdf.com",
        empresa: "asdfasdf",
        pagoPreferido: "efectivo"
    }
]

export const getClients = (req, res, next) =>{
    res.status(200).send({clientes: CLIENTS});
}

export const getClientById = (req, res, next) =>{
    const id = req.params.cid;
    const clienteBuscado = CLIENTS.filter( c => {return c.id === id});

    if(!clienteBuscado){
        const error = new HttpError("el cliente solicitado no existe.",404);
        return next(error);
    }else{
        res.json(clienteBuscado);
    }
}

export const postCliente = (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {nombre, apellido, telefono, email, empresa, pagoPreferido} = req.body;

        const nuevoCliente = 
            {
                id: v4(),
                nombre,
                apellido,
                telefono,
                email,
                empresa,
                pagoPreferido
            }

            CLIENTS.push(nuevoCliente);
            res.status(201).json(nuevoCliente);

    }
}

export const patchCliente = (req, res, next) =>{
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {telefono, email, empresa, pagoPreferido} = req.body;
        const id = req.params.cid;

        const cambio = {...CLIENTS.find(c =>(c.id === id))};
        cambio.telefono = telefono;
        cambio.email = email;
        cambio.empresa = empresa;
        cambio.pagoPreferido = pagoPreferido;

        const indice = CLIENTS.findIndex(c =>(c.id === id));
        CLIENTS[indice] = cambio;
        res.status(200).json(cambio);
    }
}

export const deleteCliente = (req, res, next) =>{
    const id = req.params.pid;
    CLIENTS = CLIENTS.filter(c =>(c.id != id));
    res.status(200).json({mensaje: 'Cliente eliminado exitosamente.'});
}