var mongo_client = require('mongodb').MongoClient
mongo_client.connect('mongodb://localhost:27017/UFSJ', {useNewUrlParser : true},
	function(err,db){
		if(err) throw err
			console.log("BD UFSJ criado!")
		db.close()
	})