import contatos from "../models/Contato.js"

class ContatosController{
    static listarContatos = (req, res) => {
        contatos.find((err, contatos) =>{
            res.status(200).json(contatos)
        })
    }

    static obterContatoPorId = (req, res) => {
        const id = req.params.id;
        contatos.findById(id, (err, contatos) => { 
            if(!err){
                res.status(200).send(contatos)
            }
            else{
                res.status(400).send({message: `${err.message} - Id do contato não encontrado`})
            }
        })
    }

    static cadastrarContato = (req, res) => {
        let contato = new contatos(req.body)
        contato.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} falha ao cadastrar contato`})
            }
            else{
                res.status(201).send(contato.toJSON())
            }
        })
    }

    static atualizarContato = (req, res) => {
        const id = req.params.id;
        contatos.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Contato atualizado com sucesso'})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarContato = (req, res) =>{
        const id = req.params.id;
        contatos.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Contato excluido com sucesso'})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default ContatosController