import { Schema, model } from "mongoose";

const usuarioSchema = new Schema(
    {
        nombUsuario: {
            type:String,
            minLength: 4,
            maxLength: 14,
            unique: true,
            required: true
        },
        email: {
            type: String,
            minLength: 8,
            maxLength: 40,
            unique: true,
            required: true
        },
        password: {
            type: String,
            minLength: 6,
            maxLength: 150,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    });

const Usuario = model('usuario', usuarioSchema);
export default Usuario;