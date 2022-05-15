import express from "express";
import { check } from "express-validator";
import Users from "../models/UsersModule.js";
import HttpError from '../models/HttpError.js';

import { getUserById,
        login,
        postNewUser} from "../controllers/Users-controllers.js";

const routeusrs = express.Router();

routeusrs.get('/:uid',getUserById);

routeusrs.post('/login',
                [
                        check('userName').not().isEmpty().isLength({min: 5}),
                        check('password').not().isEmpty().isStrongPassword()
                ]
                ,login);

routeusrs.post('/signUp',
                [
                        check('nombre').not().isEmpty(),
                        check('apellido').not().isEmpty(),
                        check('userName').not().isEmpty().isLength({min: 5}),
                        check('password').not().isEmpty()
                ]
            ,postNewUser);

export default routeusrs;