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
                        check('nombre').not().isEmpty().isAlpha(),
                        check('apellido').not().isEmpty().isAlpha(),
                        check('telefono').isMobilePhone(),
                        check('email').not().isEmpty().isEmail(),
                        check('pagoPreferido').isAlpha()
                ]
                ,postCliente);

routecln.patch('/:cid',
                [
                        check('telefono').isMobilePhone(),
                        check('email').not().isEmpty().isEmail(),
                        check('pagoPreferido').isAlpha()
                ]
                ,patchCliente);

routecln.delete('/:cid', deleteCliente);

export default routecln;