import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import HttpError from '../models/HttpError.js';
import Users from "../models/UsersModule.js";

export const getUserById = async (req, res, next) =>{
    const id = req.params.uid;
    let busquedaUsuario;
    try {
        busquedaUsuario = await Users.findById(id);
    } catch (err) {
        console.log(err);
        const error = new HttpError("ocurrio un error intente de nuevo mas tarde", 500);
        return next(error);
    }

    if(!busquedaUsuario || busquedaUsuario.lenght === 0){
        return next(
            new HttpError('El usuario especificado aún no existe o no se encontró.',404));
    } else {
        res.json(busquedaUsuario);
    }
}

export const login = async (req, res, next) =>{
    const {userName, password} = req.body;
    let usuarioAlmacenado;

    try {
        usuarioAlmacenado = await Users.findOne({userName:userName});
    } catch (err) {
        const error = new HttpError("El usuario ingresado no existe.",500);
        return next(error);
    }


    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, usuarioAlmacenado.password);
    } catch (err) {
        console.log(err)
        const error = new HttpError("no se pudieron validar los datos, intente de nuevo mas tarde.",500);
        return next(error);
    }

    if (!isValidPassword) {
        const error = new HttpError("Nombre de usuario o contraseña incorrectos",401);
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            {userId: usuarioAlmacenado._id, userName: usuarioAlmacenado.userName},
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            {expiresIn: '1h'}
        );
        console.log("token: " + token);
    } catch (err) {
        console.log(err);
    }

    res.json({ 
        message: 'Inicio de Sesión Correcto',
        userId: usuarioAlmacenado._id, 
        userName: usuarioAlmacenado.userName,
        token: token
    });
};

export const postNewUser = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {nombre, apellido, userName, password} = req.body;
        console.log(`Datos: ${nombre}, ${apellido}, ${userName}, ${password}`);

        let existe;
        try {
            existe = await Users.findOne({ userName: userName });
          } catch (err) {
            const error = new HttpError('Ocurrió un error desconocido al momento de verificar el usuario, intente de nuevo mas tarde.',500);
            return next(error);
          }

        if (existe) {
            const error = new HttpError('El usuario ya existe, para iniciar sesión use "Login".',422);
            return next(error);
          }

          //password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 12);
        } catch(err){
            const error = 
                HttpError('Ocurrio un error desconocido durante la creación, intente de nuevo mas tarde.', 500);
            return next(error);  
        }

        const newUser = new Users({
            nombre,
            apellido,
            userName,
            password: hashedPassword,
        });
        console.log(newUser);//borrar despues
        try {
            await newUser.save();
        } catch (err) {
            console.log(err);
            const error  = new HttpError("Ocurrió un error al ingresar el nuevo usuario, intente de nuevo",500);
            return next(error);
        }
        
        let token;
        try {
            token = jwt.sign(
                {userId: newUser._id, userName: newUser.userName},
                'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                {expiresIn: '1h'}
            );
        } catch (err) {
            console.log(error)
            const error = new HttpError("Ocurrió un error al ingresar el nuevo usuario, intente de nuevo",500);
            return next(error);
        }

        res.status(201).json(
            {
                mensaje: "Nuevo usuario agregado exitosamente.", 
                userId: newUser.id,
                userName: newUser.userName,
                token: token
            }
        );
    }
}
