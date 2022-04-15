import express from "express";
import { check } from "express-validator";

import { getProducts,
        getProductById,
        postProducto,
        patchProducto,
        deleteProducto } from "../controllers/Products-controllers";

const routeprods = express.Router();

routeprods.get('/', getProducts);

routeprods.get('/:pid', getProductById);

routeprods.post('/',
                [
                        check('nombreProd').notEmpty(),
                        check('tipoProd').notEmpty(),
                        check('fechaSiembra').notEmpty().isDate(),
                        check('fechaCosecha').notEmpty().isDate(),
                        check('diasUtil').notEmpty().isNumeric,
                        check('precio').notEmpty().isFloat() 
                ] 
                ,postProducto);

routeprods.patch('/',
                [
                        check('nombreProd').notEmpty(),
                        check('tipoProd').notEmpty(),
                        check('fechaSiembra').notEmpty().isDate(),
                        check('fechaCosecha').notEmpty().isDate(),
                        check('diasUtil').notEmpty().isNumeric,
                        check('precio').notEmpty().isFloat() 
                ] 
                ,patchProducto);

routeprods.delete('/:pid', deleteProducto);

export default routeprods;