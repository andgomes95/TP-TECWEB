var express = require('express')
var app = express()
var body_parser = require('body-parser')
app.use(body_parser.urlencoded({
    extended: true
}))
app.use(body_parser.json())
var mongo_cliente = require('mongodb').mongo_cliente
var dbo
//GET colaboradores
app.get('/colaboradores', function(req, res){
    dbo.collection('colaboradores').find().toArray(function(err,colaboradores){
        //if err console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(colaboradores))    
    })
})

//Delete Colaboradores
app.delete('/colaboradores',function(req,res){
    dbo.collection('colaboradores').remove({} , function(err, colaboradores){
        res.status(204)
        res.send('delete all')
    })
})

//Adicionar colaboradores
app.post('/colaboradores',function(req,res){
    var colaboradores = req.body
    dbo.collection('colaboradores').insertOne(colaboradores , function(err, result){
        //if err throw err
        res.status(200)
        res.send('Colaborador adicionado')
    })
})

//Alterar colaboradores
app.put('/colaboradores/:nome/projeto', function(req,res){
    var projeto = req.query.eq
    var colaborador_code = req.param.nome
    var nome_colaborador = {projeto:colaborador_code.unique_code}
    dbo.collection('colaboradores').updateOne(nome_colaborador, {$set : {projeto: projeto}} , function(err, result){
        //if err throw err
        res.status(200)
        res.send('colaborador' + colaborador_code.nome + 'alterado')
    })
})

var mongo_client = require('mongodb').MongoClient
mongo_client.connect('mongodb://localhost:27017/ALICE', {useNewUrlParser : true},
  function(err,db){
    if(err) throw err
    dbo = db.db('ALICE')
    app.listen(3001, function(){
        console.log('Funcionando...')
    })
})
