import express from "express"
import compromissos from "./compromissoRoutes.js"
import contatos from "./contatosRoutes.js"

const routes = (app) =>{
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        contatos,
        compromissos
    )
}

export default routes