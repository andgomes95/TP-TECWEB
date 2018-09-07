 /*var express = require('express')
var app = express()
var body_parser = require('body-parser')
app.use(body_parser.urlencoded({
    extended: true
}))
app.use(body_parser.json())
var mongo_cliente = require('mongodb').mongo_cliente
var dbo

app.get('/alunos', function(req, res){
    dbo.collection('alunos').find().toArray(function(err,alunos){
        //if err console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(alunos))    
    })
})

app.get('/professores', function(req, res){
    dbo.collection('professores').find().toArray(function(err,professores){
        //if err console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(professores))    
    })
})

app.get('/disciplinas', function(req, res){
    dbo.collection('disciplinas').find().toArray(function(err,disciplinas){
        //if err console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(disciplinas))    
    })
})

app.get('/disciplinas/nome', function(req, res){
    var disciplina = req.query.id
    var nome_disciplina = {nome:disciplina}
    dbo.collection('disciplinas').find(nome_disciplina).toArray(function(err,disciplinas){
        //if (err) returnconsole.log(err)
        var cpf_professor = {cpf:disciplinas[0].cpf}
        //var professor = req.body
        dbo.collection('professores').find(cpf_professor).toArray(function(err,professor){
          res.setHeader('Content-Type', 'application/json')
          res.status(200)
          res.send(JSON.stringify(professor))    
        })
    })
})

app.get('/professores',function(req,res){
    var professor = req.query.id
    var cpf_professor = {cpf:professor}
    dbo.collection('professores').find(cpf_professor).toArray( function(err, result){
        res.status(200)
        res.send(JSON.stringify(result))
    })
})

app.delete('/professores',function(req,res){
    dbo.collection('professores').remove({} , function(err, result){
        res.status(204)
        res.send('delete all')
    })
})

app.delete('/disciplinas',function(req,res){
    dbo.collection('disciplinas').remove({} , function(err, result){
        res.status(204)
        res.send('delete all')
    })
})

app.delete('/alunos',function(req,res){
    dbo.collection('alunos').remove({} , function(err, result){
        res.status(200)
        res.send('delete all')
    })
})

app.delete('/alunos/nome',function(req,res){
    var aluno = req.query.id
    var nome_aluno = {nome:aluno}
    dbo.collection('alunos').deleteOne(nome_aluno , function(err, result){
        res.status(200)
        res.send('delete '+ nome_aluno)
    })
})


app.delete('/professores/nome',function(req,res){
    var professor = req.query.id
    var nome_professor = {nome:professor}
    dbo.collection('professores').deleteOne(nome_professor , function(err, result){
        res.status(200)
        res.send('delete '+ nome_professor)
    })
})

app.delete('/professores/cpf',function(req,res){
    var professor = req.query.id
    var cpf_professor = {cpf:professor}
    dbo.collection('professores').deleteOne(cpf_professor , function(err, result){
        res.status(200)
        res.send('delete '+ cpf_professor)
    })
})


app.post('/alunos', function(req, res){
    var aluno = req.body
    dbo.collection('alunos').insertOne(aluno , function(err, result){
        //if err throw err
        res.status(200)
        res.send('Aluno adicionado')
    })
})

app.post('/professores', function(req, res){
    var professor = req.body
    dbo.collection('professores').insertOne(professor , function(err, result){
        //if err throw err
        res.status(200)
        res.send('Professor adicionado')
    })
})

app.put('/alunos', function(req,res){

    var aluno = req.body
    var nome_aluno = {nome:aluno.nome}
    dbo.collection('alunos').updateOne(nome_aluno, {$set : aluno} , function(err, result){
        //if err throw err
        res.status(200)
        res.send('aluno' + aluno.nome + 'alterado')
    })
})
//put errado
app.put('/professores', function(req,res){

    var professor = req.body
    var cpf_professor = {cpf:professor.cpf}
    dbo.collection('professores').updateOne(cpf_professor, {$set : professor} , function(err, result){
        //if err throw err
        res.status(200)
        res.send('professor' + professor.cpf + 'alterado')
    })
})

app.put('/disciplinas/:nome/professor', function(req,res){
    var cpf_a = req.query.id
    var disciplinas = req.param.nome
    var nome_disciplina = {nome:disciplinas.nome}
    dbo.collection('disciplinas').updateOne(nome_disciplina, {$set : {cpf: cpf_a}} , function(err, result){
        //if err throw err
        res.status(200)
        res.send('disciplina' + disciplinas.nome + 'alterado')
    })
})


var mongo_client = require('mongodb').MongoClient
mongo_client.connect('mongodb://localhost:27017/UFSJ', {useNewUrlParser : true},
  function(err,db){
    if(err) throw err
    dbo = db.db('UFSJ')
    app.listen(3001, function(){
        console.log('Funcionando...')
    })
})
*/