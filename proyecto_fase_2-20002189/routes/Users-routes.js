import express from "express";
import { check } from "express-validator";

import { getUserById,
        login,
        postNewUser} from "../controllers/Users.controllers.js";     

const routeusrs = express.Router();

routeusrs.get('/:uid',getUserById);

routeusrs.get('/login',
                [
                        check('userName').not().isEmpty().isLength({min: 5}),
                        check('password').not().isEmail().isStrongPassword()
                ]
            ,login);

routeusrs.post('/newUser',
                [
                        check('nombre').not().isEmpty().isAlpha(),
                        check('apellido').not().isEmpty().isAlpha(),
                        check('userName').not().isEmpty().isLength({min: 5}),
                        check('password').not().isEmail().isStrongPassword()
                ]
            ,postNewUser);

export default routeusrs;