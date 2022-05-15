import mongoose from "mongoose";

const Schema = mongoose.Schema;

const IngresosSchema = new Schema({
    cliente: {type: String, required: true},
    producto: {type: String, required: true},
    pUnitario: {type: Number, required: true},
    cantidad: {type: Number, required: true},
    total: {type: Number, required: true}
});

const Ingresos = mongoose.model('Ingresos', IngresosSchema);
export default Ingresos;