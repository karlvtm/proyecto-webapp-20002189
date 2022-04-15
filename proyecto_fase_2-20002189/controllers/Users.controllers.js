import { v4 } from "uuid";
import { validationResult } from "express-validator";

import HttpError from '../models/HttpError.js';

let USERS = [
    {
        id: "s1",
        nombre: "Antonio",
        apellido: "Salazar",
        userName: "asal42",
        password: "ASDF2345"
    }
]

export const getUserById = (req, res, next) =>{
    id = req.params.uid;
    busquedaUsuario = USERS.find(u =>{u.id === id});

    if(!busquedaUsuario){
        return next(
            new HttpError('El usuario especificado aún no existe o no se encontró.',404));
    } else {
        res.json(busquedaUsuario);
    }
}

export const login = (req, res, next) =>{
    id = req.params.uid;
    busquedaUsuario = USERS.find(u =>{u.id === id});

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {userName, password} = req.body;

        const nombre = USERS.find(u =>{u.userName === userName});
        const contrasenia = USERS.find(u =>{u.password === password});

        if (nombre && contrasenia){
            res.json({mensaje: "el usuario si existe, inicio de sesion."});
        } else if(!nombre || !contrasenia){
            return next(
                new HttpError('El usuario especificado aún no existe o no se encontró.',404));
        } else {
            res.json({mensaje: "las credenciales han sido ingresadas incorrectamente."});
        }
    }
}

export const postNewUser = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {nombre, apellido, userName, password} = req.body;

        newUser = {
            id: v4(),
            nombre,
            apellido,
            userName,
            password
        }

        USERS.push(newUser);

        res.status(201).json({mensaje: "se agregó el nuevo usuario.",
                newUser: newUser});

    }
}
