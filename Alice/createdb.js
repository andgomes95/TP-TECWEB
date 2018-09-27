var mongo_client = require('mongodb').MongoClient
/*Criação do Banco de Dados*/
mongo_client.connect('mongodb://localhost:27017/ALICE', {useNewUrlParser : true},
	function(err,db){
		if(err) throw err
			console.log("BD ALICE criado!")
		db.close()
	})