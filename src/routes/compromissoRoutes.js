import express from "express"
import CompromissosController from "../controllers/compromissosController.js"

const router = express.Router();

router
    .get("/compromissos", CompromissosController.listarCompromissos)
    .get("/compromissos/:id", CompromissosController.obterCompromissoPorId)
    //.get("/compromissos")//criar a rota de listar compromissos passando o id do contato
    .post("/compromissos", CompromissosController.cadastrarCompromisso)
    .put("/compromissos/:id", CompromissosController.atualizarCompromissso)
    .delete("/compromissos/:id", CompromissosController.deletarCompromisso)

export default router