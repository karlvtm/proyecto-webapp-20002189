import { validationResult } from "express-validator";

import HttpError from "../models/HttpError.js";
import Ingresos from "../models/IngresosModel.js";

export const getIngresos = async(req, res, next) =>{
    let todosIn;
    try {
        todosIn = await Ingresos.find()
    } catch (err) {
        console.log(err);
        const error = new HttpError('ocurrio un error intente de nuevo mas tarde',500);
        return next(error);
    }
    res.status(200).send(todosIn);
}

export const postIngresos = async(req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {nombre, apellido, telefono, email, empresa} = req.body;

        const nuevoIngreso = new Ingresos({
                nombre,
                apellido,
                telefono,
                email,
                empresa
            })

            try {
                await nuevoIngreso.save();
                res.status(201).json({mensaje: "ingreso agregado con exito", nuevoIngreso: nuevoIngreso});
            } catch (err) {
                console.log(err);
                const error  = new HttpError("Ocurrió un error al ingresar el nuevo ingreso, intente de nuevo",402);
                return next(error);
            }

    }
}