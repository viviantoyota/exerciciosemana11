const model = require("../models/maravilhosas-models")

const getMaravilhosas = (request, response) => {
    response.status(200).json(model.selectAll())
}

const getMaravilhosasById = (request, response) => {
    const id = parseInt(request.params.id)
    const maravilhosas = model.selectById(id)

    if(maravilhosa){
        response.status(200).json(maravilhosas)
    } else {
        response.status(404).json({ mensagem: 'Id não encontrado'})
    }
}

const atualizaMaravilhosas = (request, response) => {
    const atualiza = request.body
    const id = parseInt(request.params.id)
    const update = model.atualiza(atualiza, id)
    if(update) {
        response.status(200).json(update)
    } else {
        response.status(404).json({ mensagem: 'Id não encontrado'})
    } 
}

const adicionaMaravilhosas = (request, response) => {
    const newData = request.body

    const adiciona = model.adicionaNovoId(id)

    if(adiciona) {
        response.status(200).json(adiciona)
    } else {
        response.status(404).json({ mensagem: 'Id não encontrado'})
    }

    
}

const deleteMaravilhosas = (request, response) => {
    const id = parseInt(request.params.id)

    const deleted = model.delete(id)

    if(deleted) {
        response.status(200).json(deleted)
    } else {
        response.status(404).json({ mensagem: 'Id não encontrado'})
    }
}

module.exports = {
    getMaravilhosas,
    getMaravilhosasById,
    atualizaMaravilhosas,
    adicionaMaravilhosas,
    deleteMaravilhosas
}