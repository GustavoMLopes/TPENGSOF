import mongoose from "mongoose";

const contatoSchema = new mongoose.Schema(
    {
        id: {type:String},
        nome:{type: String, required: true},
        telefone:{type: String, required: true},
        endereco:{type: String, required: true},
    }
)

const contatos = mongoose.model('contatos', contatoSchema)
export default contatos