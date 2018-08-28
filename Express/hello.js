var express = require('express');
var app = express();

app.get('/alunos/:num', function (req,res){
	var alunos =[];
	var num_alunos = req.params.num;
	var carlos = {nome : 'Carlos', email : "carlao666@hotmail.com"};
	var joseph = {nome : 'Jarlos', email : "jarlao666@hotmail.com"};
	alunos.push (carlos);
	alunos.push (joseph);
	res.send(JSON.stringify(alunos.slice(0,num_alunos)));

});

app.get('/alunos/:index/nome', function (req,res){
	var alunos =[];
	var index_aluno = req.params.index;
	var carlos = {nome : 'Carlos', email : "carlao666@hotmail.com"};
	var joseph = {nome : 'Jarlos', email : "jarlao666@hotmail.com"};
	alunos.push (carlos);
	alunos.push (joseph);
	res.send(JSON.stringify(alunos[index_aluno].nome));

});

app.listen(3000, function (){
	console.log("Herro Whordo!");
});
