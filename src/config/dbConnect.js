import mongoose from "mongoose";
const password = 1234 
mongoose.connect(`mongodb+srv://gustavo:${password}@clusteragendaes.hep0uha.mongodb.net/agenda`)
let db = mongoose.connection

export default db