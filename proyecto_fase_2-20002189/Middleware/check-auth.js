import HttpError from '../models/http-error';
import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS'){
        return next();
    }

    const token = req.headers.authorization.split(' ')[1]; //extraemos token
    try{
        if(!token){
           throw new HttpError('Fallo de Authenticación');
        } 
        
        const decodedToken = jwt.verify(token, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        req.userData = {userId: decodedToken.userId};
        next(); //pasamos al siguiente middleware.
    } catch(err){
        console.log(err);
        const error = new HttpError('Fallo de Authenticación', 401);
        return next(error);
    }

}