import { v4 } from "uuid";
import { validationResult } from "express-validator";

import HttpError from '../models/HttpError.js';
import Clients from "../models/ClientsModel.js";


export const getClients = async (req, res, next) =>{
    let todosCl;
    try {
        todosCl = await Clients.find()
    } catch (err) {
        console.log(err);
        const error = new HttpError('ocurrio un error intente de nuevo mas tarde',500);
        return next(error);
    }
    res.status(200).send(todosCl);
}

export const getClientById = async (req, res, next) =>{
    const id = req.params.cid;

    let clienteBuscado;
    try {
        clienteBuscado = await Clients.findById(id);
    } catch (err) {
        console.log(error)
        const error = new HttpError("ocurrio un error intente de nuevo mas tarde", 500);
        return next(error);
    }

    if(!clienteBuscado || clienteBuscado.lenght === 0){
        const error = new HttpError("el cliente solicitado no existe.",404);
        return next(error);
    }else{
        res.json(clienteBuscado);
    }
}

export const postCliente = async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {nombre, apellido, telefono, email, empresa, pagoPreferido} = req.body;

        const nuevoCliente = new Clients({
                nombre,
                apellido,
                telefono,
                email,
                empresa,
                pagoPreferido
            })

            try {
                await nuevoCliente.save();
                res.status(201).json({mensaje: "el cliente nuevo fue agregado con exito", nuevoCliente: nuevoCliente});
            } catch (err) {
                console.log(err);
                const error  = new HttpError("Ocurrió un error al ingresar el nuevo cliente, intente de nuevo",402);
                return next(error);
            }

    }
}

export const patchCliente = async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {telefono, email, empresa, pagoPreferido} = req.body;
        const id = req.params.cid;

        let cliente;
        try{
            cliente = await Clients.findById(id);
        } catch(err){
            console.log(err);
            const error = new HttpError("ocurrio un error desconocido, intente mas tarde", 500);
            return next(error);
        }

        if(!cliente){
            const error = new HttpError("no se encuentra el producto solicitado, intente ingresarlo primero", 404);
            return next(error);
        }else{
            cliente.telefono = telefono;
            cliente.email = email;
            cliente.empresa = empresa;
            cliente.pagoPreferido = pagoPreferido;
        }

        try {
            await cliente.save();
            res.status(200).json({mensaje: "el cliente fue modificado con exito", nuevoCliente: nuevoCliente});
        } catch (err) {
            console.log(err);
            const error = new HttpError("algo salio mal al momento de modificar el cliente, intente de nuevo",402);
            return next(error)
        }
    }
}

export const deleteCliente = async (req, res, next) =>{
    const id = req.params.cid;

    let clntEliminado;
        try {
            clntEliminado = await Clients.findById(id);
            await clntEliminado.remove();
            res.status(200).json({mensaje: 'Cliente eliminado exitosamente.'});
        } catch (err) {
            console.log(err)
            const error = new HttpError("no se encontró el cliente especificado", 500);
            return next(error);
        }
}