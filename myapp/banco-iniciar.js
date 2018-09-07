var mongo_client = require('mongodb').MongoClient
mongo_client.connect('mongodb://localhost:27017/ALICE', {useNewUrlParser : true},
	function(err,db){
		if(err) throw err
		var dbo = db.db('ALICE')
		dbo.createCollection( 'colaboradores', function(err,res){
			if(err) throw err
			var db_alunos = [
				{nome: 'Andre Gomes', email: 'andgomes95@gmail.com', formacao: 'granduando', github: 'https://github.com/andgomes95', lattes: 'http://lattes.cnpq.br/0762220978450376', linkedin: 'www.linkedin.com/in/andrel-gomes' },
				{nome: 'Jose Mauro', email: 'jmsandy@gmail.com', formacao: 'mestrando'},
				{nome: 'Frederico Resende', email: 'fredribeiro97@gmail.com', formacao: 'graduando'},
				{nome: 'Flavio Schiavoni', email: 'fls@ufsj.edu.br', formacao: 'doutor'}
			]
			dbo.collection('colaboradores').insertMany(db_alunos, function(err,res){
				if(err) throw err
					console.log('colaboradores inseridos')
				db.close()
			})
		})
		dbo.createCollection( 'projetos', function(err,res){
			var db_disc = [
			{nome: 'Mosaicode'},
			{nome: 'Orchidea'}
			]
			dbo.collection('projetos').insertMany(db_disc, function(err,res){
				if(err) throw err
					console.log('projetos inseridos')
				db.close()
			})
		})
		dbo.createCollection( 'grupos', function(err,res){
			var db_disc = [
			{nome: 'Grupo de Pesquisa'},
			{nome: 'Grupo de Estudos'},
			{nome: 'Projeto de Extensão'}
			]
			dbo.collection('grupos').insertMany(db_disc, function(err,res){
				if(err) throw err
					console.log('projetos inseridos')
				db.close()
			})
			dbo.createCollection( 'publicacoes', function(err,res){
			var db_disc = [
			{nome: 'Web Audio application development with Mosaicode', revista: '16th Brazilian Symposium on Computer Music', ano: '2017', local_evento: ' São Paulo'}
			]
			dbo.collection('publicacoes').insertMany(db_disc, function(err,res){
				if(err) throw err
					console.log('publicacoes inseridos')
				db.close()
			})
		})
		})
	})