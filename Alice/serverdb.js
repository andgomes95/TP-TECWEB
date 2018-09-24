var express = require('express')
var app = express()
var body_parser = require('body-parser')
app.use(body_parser.urlencoded({
    extended: true
}))
app.use(body_parser.json())

var mongo_cliente = require('mongodb').mongo_cliente
var dbo
/**************************************************** COLABORADORES **********************************************************/
//GET colaboradores
app.get('/colaboradores', function(req, res){
    dbo.collection('colaboradores').find().toArray(function(err,colaboradores){
        //if err console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(colaboradores))    
    })
})

//GET um Colaborador
app.get('/colaboradores/:email', function(req,res){
    var email = req.params.email
    dbo.collection('colaboradores').find({email:email}).toArray(function(err,colaboradores){
        if( err)     console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        result = JSON.stringify(colaboradores)
        if (result.length > 2){
            res.send(result) 
        }else{
            res.send(JSON.stringify(email+ ' nao cadastrado!') );
        }
    })
})

//GET Colaboradores graduando
app.get('/colaboradores/graduando', function(req,res){
    fm = {formacao:"graduando"}
    dbo.collection('colaboradores').find(fm).toArray(function(err,colaboradores){
        if( err)     console.log(err)
        console.log(colaboradores.length)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        result = JSON.stringify(colaboradores)
        if (result.length > 2){
            res.send(result) 
        }else{
            res.send(JSON.stringify('Não há Graduandos') );
        }
    })
})

//GET Colaboradores mestrando
app.get('/colaboradores/mestrando', function(req,res){
    fm = {formacao:"mestrando"}
    dbo.collection('colaboradores').find(fm).toArray(function(err,colaboradores){
        if( err)     console.log(err)
        console.log(colaboradores.length)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        result = JSON.stringify(colaboradores)
        if (result.length > 2){
            res.send(result) 
        }else{
            res.send(JSON.stringify('Não há Mestrandos') );
        }
    })
})

//GET Colaboradores professor
app.get('/colaboradores/professor', function(req,res){
    fm = {formacao:"professor"}
    dbo.collection('colaboradores').find(fm).toArray(function(err,colaboradores){
        if( err)     console.log(err)
        console.log(colaboradores.length)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        result = JSON.stringify(colaboradores)
        if (result.length > 2){
            res.send(result) 
        }else{
            res.send(JSON.stringify('Não há Professores') );
        }
    })
})
 
//Delete Colaboradores
app.delete('/colaboradores',function(req,res){
    dbo.collection('colaboradores').remove({} , function(err, colaboradores){
        res.status(204)
        res.send('delete all')
    })
})

//Delete ue um colaborador
app.delete('/colaboradores/:email',function(req,res){
    var email = req.params.email
    var removido = {email:email}
    dbo.collection('colaboradores').deleteOne(removido , function(err, result){
        res.status(200)
        res.send('delete '+ email)
    })
})

//Adicionar colaboradores
app.post('/colaboradores',function(req,res){
    var colaboradores = req.body
    console.log(colaboradores.length)
    dbo.collection('colaboradores').insertOne(colaboradores , function(err, result){
        //if err throw err
        res.status(200)
        res.send('Colaborador adicionado')
    })
})

//Alterar colaboradores
app.put('/colaboradores',function(req,res){
    var colaborador = req.body
    var id = {email : colaborador.email};
    dbo.collection('colaboradores').updateOne(id,{$set : colaborador} , function(err, result){
        //if err throw err
        res.status(200)
        res.send('Colaborador alterado')
    })
})

//Alterar projeto em colaborador
app.put('/colaboradores/:email/projetos',function(req, res) {

    var nome_projeto = req.query.eq;
    var email_colaborador = req.params.email;
    var where = {email : email_colaborador};
    dbo.collection('projetos').find({nome: nome_projeto}).toArray(function(err,rec){
        if (rec.length>0){
            dbo.collection('colaboradores').updateOne(where, {$set: {projeto: nome_projeto}} ,function(err, result) {
                res.status(200);
                res.send('Projeto adicionada em colaboradores com sucesso!');
            });
        }else{
            res.send('Projeto não existente')
        }
    });
});

//Alterar publicacoes em colaborador
app.put('/colaboradores/:email/publicacoes',function(req, res) {

    var publicacoes = req.query.eq;
    var list_publicacoes = publicacoes.split(',')
    var email_colaborador = req.params.email;
    var where = {email : email_colaborador};

    var list_colaboradores;
    dbo.collection('colaboradores').find(where).toArray(function(err,colaboradores){
        //if err console.log(err)
        var colab_list = []
        list_colaboradores = JSON.stringify(colaboradores,["publicacoes"])
        //tem tamanho 4 quando é um JSON Vazio
        if(list_colaboradores.length>4){
            list_colaboradores = list_colaboradores.split('[')
            list_colaboradores = list_colaboradores[2].split('\"')
            for (var j = 1; j < list_colaboradores.length;j = j+2){
                colab_list.push(list_colaboradores[j])
            }

        }
        for (var i = 0; i < list_publicacoes.length; i++) {
            if (!(colab_list.indexOf(list_publicacoes[i]) != -1)){
                colab_list.push(list_publicacoes[i])
            }
        } 


        dbo.collection('colaboradores').updateOne(where, {$set: {publicacoes: colab_list}} ,function(err, result) {
            res.status(200);
            res.send('Publicações adicionada em colaboradores com sucesso!'+ colab_list);
        })
    });   
});

/**************************************************** PUBLICACOES **********************************************************/
//GET publicacoes
app.get('/publicacoes', function(req, res){
    dbo.collection('publicacoes').find().toArray(function(err,publicacoes){
        //if err console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(publicacoes))    
    })
})

//GET uma publicacao
app.get('/publicacoes/code', function(req,res){
    var code = req.query.eq
    dbo.collection('publicacoes').find({code:code}).toArray(function(err,publicacoes){
        //if err console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(publicacoes))    
    })
})

//Delete publicacoes
app.delete('/publicacoes',function(req,res){
    dbo.collection('publicacoes').remove({} , function(err, publicacoes){
        res.status(204)
        res.send('delete all')
    })
})

//Delete uma publicacoes
app.delete('/publicacoes/code',function(req,res){
    var code = req.query.eq
    var removido = {code:code}
    dbo.collection('publicacoes').deleteOne(removido , function(err, result){
        res.status(200)
        res.send('delete '+ code)
    })
})

//Adicionar publicacoes
app.post('/publicacoes',function(req,res){
    var publicacoes = req.body
    dbo.collection('publicacoes').insertOne(publicacoes , function(err, result){
        //if err throw err
        res.status(200)
        res.send('publicacoes adicionadas')
    })
})

//Alterar publicacoes
app.put('/publicacoes',function(req,res){
    var publicacao = req.body
    var id = {code: publicacao.code}
    dbo.collection('publicacoes').updateOne(id,{$set : publicacao} , function(err, result){
        //if err throw err
        res.status(200)
        res.send('publicacoes alteradas')
    })
})

//alterar autores em publicacoes
app.put('/publicacoes/:code/colaboradores',function(req, res) {

    var colaboradores = req.query.eq;
    var list_colaboradores = colaboradores.split(',')
    var code_publicacoes = req.params.code;
    var where = {code : code_publicacoes};

    var list_publicacoes;
    dbo.collection('publicacoes').find(where).toArray(function(err,publicacoes){
        var public_list = []
        list_publicacoes = JSON.stringify(publicacoes,["autores"])
        //JSON tem tamanho 4 se vazio
        if(list_publicacoes.length>4){
            list_publicacoes = list_publicacoes.split('[')
            list_publicacoes = list_publicacoes[2].split('\"')
            for (var j = 1; j < list_publicacoes.length;j = j+2){
                public_list.push(list_publicacoes[j])
            }
        }

        for (var i = 0; i < list_colaboradores.length; i++) {
            if (!(public_list.indexOf(list_colaboradores[i]) != -1)){
                public_list.push(list_colaboradores[i])
            }
        } 

        dbo.collection('publicacoes').updateOne(where, {$set: {autores: list_colaboradores}} ,function(err, result) {
            res.status(200);
            res.send('Colaboradores adicionados nas publicacoes!' + public_list);
        });
    })
});

/**************************************************** PROJETOS **********************************************************/
//GET projetos
app.get('/projetos', function(req, res){
    dbo.collection('projetos').find().toArray(function(err,projetos){
        //if err console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(projetos))    
    })
})

//GET um projeto
app.get('/projetos/nome', function(req,res){
    var nome = req.query.eq
    dbo.collection('projetos').find({nome:nome}).toArray(function(err,projetos){
        //if err console.log(err)
        res.setHeader('Content-Type', 'application/json')
        res.status(200)
        res.send(JSON.stringify(projetos))    
    })
})

//Delete projetos
app.delete('/projetos',function(req,res){
    dbo.collection('projetos').remove({} , function(err, projetos){
        res.status(204)
        res.send('delete all')
    })
})

//Delete um projetos
app.delete('/projetos/nome',function(req,res){
    var nome = req.query.eq
    var removido = {nome:nome}
    dbo.collection('projetos').deleteOne(removido , function(err, result){
        res.status(200)
        res.send('delete '+ code)
    })
})

//Adicionar projetos
app.post('/projetos',function(req,res){
    var projetos = req.body
    dbo.collection('projetos').insertOne(projetos , function(err, result){
        //if err throw err
        res.status(200)
        res.send('projetos adicionadas')
    })
})

//Alterar projetos
app.put('/projetos',function(req,res){
    var projeto = req.body
    var id = {nome: projeto.nome}
    dbo.collection('projetos').updateOne(id,{$set: projeto} , function(err, result){
        //if err throw err
        res.status(200)
        res.send('projetos alterados')
    })
})

app.put('/publicacoes/:code/colaboradores',function(req, res) {

    var colaboradores = req.query.eq;
    var list_colaboradores = colaboradores.split(',')
    var code_publicacoes = req.params.code;
    var where = {code : code_publicacoes};

    var list_publicacoes;
    dbo.collection('publicacoes').find(where).toArray(function(err,publicacoes){
        var public_list = []
        list_publicacoes = JSON.stringify(publicacoes,["autores"])
        //JSON tem tamanho 4 se vazio
        if(list_publicacoes.length>4){
            list_publicacoes = list_publicacoes.split('[')
            list_publicacoes = list_publicacoes[2].split('\"')
            for (var j = 1; j < list_publicacoes.length;j = j+2){
                public_list.push(list_publicacoes[j])
            }
        }

        for (var i = 0; i < list_colaboradores.length; i++) {
            if (!(public_list.indexOf(list_colaboradores[i]) != -1)){
                public_list.push(list_colaboradores[i])
            }
        } 

        dbo.collection('publicacoes').updateOne(where, {$set: {autores: public_list}} ,function(err, result) {
            res.status(200);
            res.send('Colaboradores adicionados nas publicacoes!' + public_list);
        });
    })
});
//Alterar colaboradores em projetos
app.put('/projetos/:nome/colaboradores',function(req, res) {

    var colaboradores = req.query.eq;
    var list_colaboradores = colaboradores.split(',')
    var nome_projetos = req.params.nome;
    var where = {nome : nome_projetos};

    var list_projetos;
    dbo.collection('projetos').find(where).toArray(function(err,projetos){
        var project_list = []
        list_projetos = JSON.stringify(projetos,["colaboradores"])
        //JSON tem tamanho 4 se vazio
        if(list_projetos.length>4){
            list_projetos = list_projetos.split('[')
            list_projetos = list_projetos[2].split('\"')
            for (var j = 1; j < list_projetos.length;j = j+2){
                project_list.push(list_projetos[j])
            }
        }

        for (var i = 0; i < list_colaboradores.length; i++) {
            if (!(project_list.indexOf(list_colaboradores[i]) != -1)){
                project_list.push(list_colaboradores[i])
            }
        } 

        dbo.collection('projetos').updateOne(where, {$set: {colaboradores: project_list}} ,function(err, result) {
            res.status(200);
            res.send('Colaboradores'+ list_colaboradores     + 'adicionados nos projetos!');
        });
    });
});

var mongo_client = require('mongodb').MongoClient
mongo_client.connect('mongodb://localhost:27017/ALICE', {useNewUrlParser : true},
  function(err,db){
    if(err) throw err
    dbo = db.db('ALICE')
    app.listen(3001, function(){
        console.log('Funcionando...')
    })
})
