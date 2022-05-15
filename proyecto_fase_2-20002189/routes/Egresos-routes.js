import express from "express";
import { check } from "express-validator";

import { getEgresos, postEgresos } from "../controllers/Egresos-controllers.js";

const routeEgr = express.Router();

routeEgr.get('/', getEgresos);

routeEgr.post('/',
                [
                    check('compra').not().isEmpty().isString(),
                    check('descripcion').not().isEmpty().isString(),
                    check('monto').not().isEmpty(),
                    check('responsable').not().isEmpty()
                ]
                , postEgresos);

export default routeEgr;