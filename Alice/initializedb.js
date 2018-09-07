var mongo_client = require('mongodb').MongoClient
mongo_client.connect('mongodb://localhost:27017/ALICE', {useNewUrlParser : true},function(err,db){
	if(err) throw err
	var dbo = db.db('ALICE')
	dbo.createCollection( 'colaboradores', function(err,res){
		if(err) throw err
		var db_alunos = [
			{unique_code: 'Alice003', nome: 'Andre Gomes', email: 'andgomes95@gmail.com', formacao: 'granduando', github: 'https://github.com/andgomes95', lattes: 'http://lattes.cnpq.br/0762220978450376', linkedin: 'www.linkedin.com/in/andrel-gomes' },
			{unique_code: 'Alice002', nome: 'Jose Mauro', email: 'jmsandy@gmail.com', formacao: 'mestrando'},
			{unique_code: 'Alice004', nome: 'Frederico Resende', email: 'fredribeiro97@gmail.com', formacao: 'graduando'},
			{unique_code: 'Alice001', nome: 'Flavio Schiavoni', email: 'fls@ufsj.edu.br', formacao: 'doutor'}
		]
		dbo.collection('colaboradores').insertMany(db_alunos, function(err,res){
			if(err) throw err
				console.log('colaboradores inseridos')
			db.close()
		})
	})
})