import { v4 } from "uuid";
import { validationResult } from "express-validator";

import HttpError from '../models/HttpError.js';

let PRODUCTS = [
    {
        id: "p1",
        nombreProd: "tomate",
        tipoProd: "tomate",
        fechaSiembra: "01/01/2019",
        fechaCosecha: "32/13/2019",
        diasUtil: 25,
        precio: 09.99

    }
]

export const getProducts = (req, res, next) =>{
    res.status(200).send({Productos: PRODUCTS});
}

export const getProductById = (req, res, next) =>{
    const id = req.params.pid;
    const pBuscado = PRODUCTS.filter( p => {return p.id === id});

    if(!pBuscado){
        const error = new HttpError("el producto solicitado no existe, intente ingresarlo antes al sistema.",404);
        return next(error);
    }else{
        res.json(pBuscado);
    }
}

export const postProducto = (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {nombreProd, tipoProd, fechaSiembra, fechaCosecha, diasUtil, precio} = req.body;

        const nuevoProducto = 
            {
                id: v4(),
                nombreProd,
                tipoProd,
                fechaSiembra,
                fechaCosecha,
                diasUtil,
                precio
            }

            PRODUCTS.push(nuevoProducto);
            res.status(201).json(nuevoProducto);

    }
}

export const patchProducto = (req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(
            new HttpError("Los datos ingresados no son validos.", 422)
        );
    } else {
        const {nombreProd, tipoProd, fechaSiembra, fechaCosecha, diasUtil, precio} = req.body;
        const id = req.params.id;

        const cambio = {...PRODUCTS.find(p =>(p.id === id))};

        cambio.nombreProd = nombreProd;
        cambio.tipoProd = tipoProd;
        cambio.fechaSiembra = fechaSiembra;
        cambio.fechaCosecha = fechaCosecha;
        cambio.diasUtil = diasUtil;
        cambio.precio = precio;

        const indice = {...PRODUCTS.findIndex(p =>(p.id === id))};
        PRODUCTS[indice] = cambio;
        res.status(200).json(cambio);
    }
}

export const deleteProducto = (req, res, next) =>{
    const id = req.params.pid;

    const PRODUCTS = PRODUCTS.filter(p =>(p.id != id));
    res.status(200).json({mensaje: "Producto eliminado exitosamente."});
}