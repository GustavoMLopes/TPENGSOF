import mongoose from "mongoose";
const password = 123
//mongoose.connect(`mongodb+srv://gustavo:${password}@clusteragendaes.hep0uha.mongodb.net/agenda`)
mongoose.connect(`mongodb+srv://daniel:${password}@cluster0.a78vqo1.mongodb.net/agenda`)
    
let db = mongoose.connection

export default db