import compromissos from "../models/Compromisso.js"

class CompromissosController{
    static listarCompromissos = (req, res) => {
        compromissos.find()
            .populate('contato')
            .exec((err, compromissos) =>{
                res.status(200).json(compromissos)
            }
        )
    }

    static listarCompromissosPoIdContato = (req, res) =>{
        const idContato = req.query.idContato
        compromissos.find({'contato': idContato}, {}, (err, compromissos) =>{
            res.status(200).send(compromissos)
        })
    }

    static obterCompromissoPorId = (req, res) => {
        const id = req.params.id;
        compromissos.findById(id)
        .populate('contato')
        .exec((err, compromissos) => { 
            if(!err){
                res.status(200).send(compromissos)
            }
            else{
                res.status(400).send({message: `${err.message} - Id do compromisso não encontrado`})
            }
        })
    }

    static cadastrarCompromisso = (req, res) => {
        let compromisso = new compromissos(req.body)
        compromisso.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} falha ao cadastrar compromisso`})
            }
            else{
                res.status(201).send(compromisso.toJSON())
            }
        })
    }

    static atualizarCompromissso = (req, res) => {
        const id = req.params.id;
        compromissos.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: 'Compromisso atualizado com sucesso'})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarCompromisso = (req, res) =>{
        const id = req.params.id;
        compromissos.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: 'Compromisso removido com sucesso'})
            }
            else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default CompromissosController