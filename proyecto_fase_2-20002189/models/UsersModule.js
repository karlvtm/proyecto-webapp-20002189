import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, required: true},
});

const Users = mongoose.model('Users',UsersSchema);
export default Users;