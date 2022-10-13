import express from "express"
import ContatosController from "../controllers/contatosController.js"

const router = express.Router();

router
    .get("/contatos", ContatosController.listarContatos)
    .get("/contatos/:id", ContatosController.obterContatoPorId)
    .post("/contatos", ContatosController.cadastrarContato)
    .put("/contatos/:id", ContatosController.atualizarContato)
    .delete("/contatos/:id", ContatosController.deletarContato)

export default router