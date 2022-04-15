import express from "express";
import bodyParser from "body-parser";

//imports del sistema
import routeusrs from "./routes/Users-routes.js";
import routeprods from "./routes/Products-routes.js";
import routecln from "./routes/Clients-routes.js";

const port = 5001;
const app = express();

app.use(bodyParser.json());

app.use('/api/users/', routeusrs);

app.use('/api/products/', routeprods);

app.use('/api/clients/', routecln);


app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }else{
        res.status(error.code || 500);
        res.json({mensaje: error.message || 'Ocurrio un error desconocido.'})
    }
});

app.listen(port);