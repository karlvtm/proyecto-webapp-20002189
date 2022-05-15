import express from "express";
import { check } from "express-validator";

import { getProducts,
        getProductById,
        postProducto,
        patchProducto,
        deleteProducto } from "../controllers/Products-controllers.js";

const routeprods = express.Router();

routeprods.get('/', getProducts);

routeprods.get('/:pid', getProductById);

routeprods.post('/',
                [
                        check('nombreProd').notEmpty(),
                        check('tipoProd').notEmpty(),
                        check('fechaSiembra').notEmpty().isDate(),
                        check('fechaCosecha').notEmpty().isDate(),
                        check('diasUtil').notEmpty().isNumeric(),
                        check('precio').notEmpty().isNumeric()
                ] 
                ,postProducto);

routeprods.patch('/:pid',
                [
                        check('fechaSiembra').isDate(),
                        check('fechaCosecha').isDate(),
                        check('diasUtil').isNumeric(),
                        check('precio').isNumeric() 
                ] 
                ,patchProducto);

routeprods.delete('/:pid', deleteProducto);

export default routeprods;