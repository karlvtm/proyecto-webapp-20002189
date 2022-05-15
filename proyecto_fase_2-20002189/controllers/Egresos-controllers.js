import { validationResult } from "express-validator";

import HttpError from "../models/HttpError.js";
import Egresos from "../models/EgresosModel.js";

export const getEgresos = async(req, res, next) =>{
    let todosEg;
    try {
        todosEg = await Egresos.find()
    } catch (err) {
        console.log(err);
        const error = new HttpError('ocurrio un error intente de nuevo mas tarde',500);
        return next(error);
    }
    res.status(200).send(todosEg);
}

export const postEgresos = async(req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {compra, descripcion, monto, responsable} = req.body;

        const nuevoEgreso = new Egresos({
                compra,
                descripcion,
                monto,
                responsable
            })

            try {
                await nuevoEgreso.save();
                res.status(201).json({mensaje: "Egreso agregado con exito", nuevoEgreso: nuevoEgreso});
            } catch (err) {
                console.log(err);
                const error  = new HttpError("Ocurrió un error al ingresar el nuevo egreso, intente de nuevo",402);
                return next(error);
            }

    }
}