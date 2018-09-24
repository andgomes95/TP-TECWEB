var mongo_client = require('mongodb').MongoClient
mongo_client.connect('mongodb://localhost:27017/ALICE', {useNewUrlParser : true},function(err,db){
	if(err) throw err
	var dbo = db.db('ALICE')
	dbo.createCollection( 'colaboradores', function(err,res){
		if(err) throw err
		var db_alunos = [
				{nome: 'Andre Gomes', email: 'andgomes95@gmail.com', formacao: 'graduando', github: 'https://github.com/andgomes95', lattes: 'http://lattes.cnpq.br/0762220978450376'},
				{nome: 'Jose Mauro', email: 'jmsandy@gmail.com', formacao: 'mestrando', github: 'https://github.com/jmsandy', lattes: 'http://lattes.cnpq.br/5849035895177823'},
				{nome: 'Frederico Resende', email: 'fredribeiro97@gmail.com', formacao: 'graduando', github: 'https://github.com/frederr97', lattes: 'http://lattes.cnpq.br/6452558884220881'},
				{nome: 'Flavio Schiavoni', email: 'fls@ufsj.edu.br', formacao: 'professor', github: 'https://github.com/flschiavoni', lattes: 'http://lattes.cnpq.br/1259591090948385'}
			]
		dbo.collection('colaboradores').insertMany(db_alunos, function(err,res){
			if(err) throw err
				console.log('colaboradores inseridos')
			db.close()
		})
	})
	dbo.createCollection( 'publicacoes', function(err,res){
		var db_disc = [
		{code: 'SBCM2017Mosaicode', nome: 'Web Audio application development with Mosaicode', evento: '16th Brazilian Symposium on Computer Music', ano: '2017', local_evento: ' São Paulo',autores: ['fls@ufsj.edu.br']},
		{code: 'CBSOFTTools2018Mosaicode', nome: 'O Ambiente de Programação Visual Mosaicode', evento: '9ª Sessão de Ferramentas do CBSoft', ano: '2018', local_evento: ' São Carlos',autores: ['fls@ufsj.edu.br']},
		{code: 'UBIMUS2018Mosaicode', nome: 'Utilização do Ambiente Mosaicode como ferramenta de apoio para o ensino de Computação Musical', evento: 'VIII Workshop on Ubiquitous Music (UBIMUS)', ano: '2018', local_evento: ' São João del-Rei',autores: ['fls@ufsj.edu.br']}
		]
		dbo.collection('publicacoes').insertMany(db_disc, function(err,res){
			if(err) throw err
				console.log('publicacoes inseridos')
			db.close()
		})
	})
	dbo.createCollection( 'projetos', function(err,res){
		var db_disc = [
		{nome: 'Mosaicode', descricao: 'Ambiente de Programação Visual'},
		{nome: 'Orchidea', descricao: 'Orquestra de Ideias'}
		]
		dbo.collection('projetos').insertMany(db_disc, function(err,res){
			if(err) throw err
				console.log('projetos inseridos')
			db.close()
		})
	})
})