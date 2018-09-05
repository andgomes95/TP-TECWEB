var mongo_client = require('mongodb').MongoClient
mongo_client.connect('mongodb://localhost:27017/UFSJ', {useNewUrlParser : true},
	function(err,db){
		if(err) throw err
		var dbo = db.db('UFSJ')
		dbo.createCollection( 'alunos', function(err,res){
			if(err) throw err
			var db_alunos = [
				{nome: 'Joao', email: 'joao@gmail.com', cr: '9.0'},
				{nome: 'Maria', email: 'maria@gmail.com', cr: '9.5'},
				{nome: 'Jose', email: 'jose@gmail.com', cr: '7.0'}
			]
			dbo.collection('alunos').insertMany(db_alunos, function(err,res){
				if(err) throw err
					console.log('alunos inseridos')
				db.close()
			})
		})
		dbo.createCollection( 'professores', function(err,res){
			var db_profs = [
			{nome: 'Xandao', telefone: '32987655678', cpf: '123456789', qi: '150'},
			{nome: 'Elder', telefone: '32912398765', cpf: '987654321', qi: '150'}
			]
			dbo.collection('professores').insertMany(db_profs, function(err,res){
				if(err) throw err
					console.log('professores inseridos')
				db.close()
			})
		})
		dbo.createCollection( 'disciplinas', function(err,res){
			var db_disc = [
			{nome: 'Complicadores', carga_horaria: '20'}
			]
			dbo.collection('disciplinas').insertMany(db_disc, function(err,res){
				if(err) throw err
					console.log('disciplinas inseridos')
				db.close()
			})
		})
		//if(err) throw err

		//db.close()
	})