import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    nombreProd: {type: String, required: true},
    tipoProd: {type: String, required: true},
    fechaSiembra: {type: Date, required: true},
    fechaCosecha: {type: Date, required: true},
    diasUtil: {type: Number, required: true},
    precio: {type: Number, required: true}
});

const Products = mongoose.model('Products', ProductsSchema);
export default Products;
