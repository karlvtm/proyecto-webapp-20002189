import express from "express";
import { check } from "express-validator";

import { getIngresos, postIngresos } from "../controllers/Ingresos-controllers.js";

const routeIng = express.Router();

routeIng.get('/', getIngresos);

routeIng.post('/',
                [
                    check('cliente').not().isEmpty().isString(),
                    check('producto').not().isEmpty().isString(),
                    check('pUnitario').not().isEmpty(),
                    check('cantidad').not().isEmpty(),
                    check('total').not().isEmpty()
                ]
                ,postIngresos);

export default routeIng;