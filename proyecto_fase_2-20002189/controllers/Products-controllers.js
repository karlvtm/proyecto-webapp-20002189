import { v4 } from "uuid";
import { validationResult } from "express-validator";

import HttpError from '../models/HttpError.js';
import Products from "../models/ProductsModel.js";


export const getProducts = async (req, res, next) =>{

    let todosPr;
    try {
        todosPr = await Products.find();
        res.status(200).send(todosPr);
    } catch (err) {
        console.log(err);
        const error = new HttpError('ocurrio un error intente de nuevo mas tarde',500);
        return next(error);
    }
}

export const getProductById = async (req, res, next) =>{
    const id = req.params.pid;
    
    let producto;
    try{
        producto = await Products.findById(id);
    } catch(err){
        console.log(err);
        const error = new HttpError("ocurrio un error desconocido, intente mas tarde", 500);
        return next(error);
    }

    if(!productos || productos.lenght === 0){
        const error = new HttpError("el producto solicitado no existe, intente ingresarlo antes al sistema.",404);
        return next(error);
    }else{
        res.json(productos);
    }
}

export const postProducto = async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {nombreProd, tipoProd, fechaSiembra, fechaCosecha, diasUtil, precio} = req.body;

        const nuevoProducto = new Products({
                nombreProd,
                tipoProd,
                fechaSiembra,
                fechaCosecha,
                diasUtil,
                precio,
            });

            try{
                await nuevoProducto.save();
                res.status(201).json({mensaje: "producto agregado correctamente"});
            }catch (err){
                console.log(err);
                const error  = new HttpError("Ocurrió un error al ingresar el nuevo producto, intente de nuevo",402);
                return next(error);
            }
    }
}

export const patchProducto = async (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {nombreProd, tipoProd, fechaSiembra, fechaCosecha, diasUtil, precio} = req.body;
        const id = req.params.pid;

        let producto;
        try{
            producto = await Products.findById(id);
        } catch(err){
            console.log(err);
            const error = new HttpError("ocurrio un error desconocido, intente mas tarde", 500);
            return next(error);
        }

        if(!producto){
            const error = new HttpError("no se encuentra el producto solicitado, intente ingresarlo primero", 404);
            return next(error);
        }else{
            producto.nombreProd = nombreProd;
            producto.tipoProd = tipoProd;
            producto.fechaSiembra = fechaSiembra;
            producto.fechaCosecha = fechaCosecha;
            producto.diasUtil = diasUtil;
            producto.precio = precio;
        }

        try{
            await producto.save();
            res.status(200).json({mensaje: "El producto ha sido actualizado correctamente"});
        }catch(err){
            console.log(err);
            const error = new HttpError("algo salio mal al momento de modificar el producto, intente de nuevo",402);
            return next(error)
        }
    }
}

export const deleteProducto = async (req, res, next) =>{
    const id = req.params.pid;

    let prodEliminado;
        try {
            prodEliminado = await Products.findById(id);
            await prodEliminado.remove();
            res.status(200).json({mensaje: "Producto eliminado exitosamente."});
        } catch (err) {
            console.log(err)
            const error = new HttpError("no se encontró el producto especificado", 500);
            return next(error);
        }
}