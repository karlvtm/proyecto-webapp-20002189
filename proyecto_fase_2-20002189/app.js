import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//imports del sistema
import routeusrs from "./routes/Users-routes.js";
import routeprods from "./routes/Products-routes.js";
import routecln from "./routes/Clients-routes.js";
import routeIng from "./routes/Ingresos-routes.js";
import routeEgr from "./routes/Egresos-routes.js";

const port = 5000;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api/users/', routeusrs);

app.use('/api/products/', routeprods);

app.use('/api/clients/', routecln);

app.use('/api/ingresos/', routeIng);

app.use('/api/egresos/', routeEgr);


app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }else{
        res.status(error.code || 500);
        res.json({mensaje: error.message || 'Ocurrio un error desconocido.'})
    }
});

const cString = 'mongodb://kvt:kvt@primercluster-shard-00-00.2qobq.mongodb.net:27017,primercluster-shard-00-01.2qobq.mongodb.net:27017,primercluster-shard-00-02.2qobq.mongodb.net:27017/agroManagerWebApp?ssl=true&replicaSet=atlas-pfawmj-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose
    .connect(cString)
    .then(() =>{
        app.listen(port)
    })
    .catch((err) =>{
        console.log(err)
    });