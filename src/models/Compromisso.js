import mongoose from "mongoose";

const compromissoSchema = new mongoose.Schema(
    {
        id: {type:String},
        nome:{type: String, required: true},
        descricao:{type: String, required: true},
        contato: {type: mongoose.Schema.Types.ObjectId, ref:'contatos', required: false},
        data:{type: String, required: true},// mudar para data de verdade depois
        hora:{type: String, required: true} // aqui também 
    },
    {
        versionKey: false
    }
)

const compromissos = mongoose.model("compromissos", compromissoSchema)
export default compromissos