import mongoose from "mongoose";

const Schema = mongoose.Schema;

const EgresosSchema = new Schema({
    compra: {type: String, required: true},
    descripcion: {type: String, required: true},
    monto: {type: Number, required: true},
    responsable: {type: String, required: true}
});

const Egresos = mongoose.model('Egresos', EgresosSchema);
export default Egresos;