import express from "express";
import { check } from "express-validator";

import { getClients, 
        getClientById,
        postCliente,
        patchCliente,
        deleteCliente } from "../controllers/Clients-controllers.js";

const routecln = express.Router();

routecln.get('/', getClients);

routecln.get('/:cid', getClientById);

routecln.post('/',
                [
                        check('nombre').not().isEmpty().isString(),
                        check('apellido').not().isEmpty().isString(),
                        check('telefono').isString(),
                        check('email').not().isEmpty().isEmail(),
                        check('empresa').isString(),
                        check('pagoPreferido').isString()
                ]
                ,postCliente);

routecln.patch('/:cid',
                [
                        check('telefono').isString(),
                        check('email').isEmail(),
                        check ('empresa').isString(),
                        check('pagoPreferido').isString()
                ]
                ,patchCliente);

routecln.delete('/:cid', deleteCliente);

export default routecln;