import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ClientsSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    telefono: {type: String, required: false},
    email: {type: String, required: true},
    empresa: {type: String, required: false},
    pagoPreferido: {type: String, required: false}
});

const Clients = mongoose.model('Clients',ClientsSchema);
export default Clients;