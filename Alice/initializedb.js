var mongo_client = require('mongodb').MongoClient
mongo_client.connect('mongodb://localhost:27017/ALICE', {useNewUrlParser : true},function(err,db){
	if(err) throw err
	var dbo = db.db('ALICE')
	/*Criação da Coleção de colaboradores*/
	dbo.createCollection( 'colaboradores', function(err,res){
		if(err) throw err
		var db_alunos = [
				{nome: 'Andre Gomes', email: 'andgomes95@gmail.com', formacao: 'graduando', github: 'https://github.com/andgomes95', lattes: 'http://lattes.cnpq.br/0762220978450376',password: "123456",image: "https://scontent.fjdf1-1.fna.fbcdn.net/v/t1.0-9/15621903_1359375777414059_2848019663471389067_n.jpg?_nc_cat=109&_nc_ht=scontent.fjdf1-1.fna&oh=79d23556b19ce92a88cb8b46de22896f&oe=5C90AD4E"},
				{nome: 'Jose Mauro', email: 'jmsandy@gmail.com', formacao: 'mestrando', github: 'https://github.com/jmsandy', lattes: 'http://lattes.cnpq.br/5849035895177823', password: "123456", image: "https://alice.dcomp.ufsj.edu.br/wp-content/uploads/2018/08/rabbit-600-230x300.png"},
				{nome: 'Frederico Resende', email: 'fredribeiro97@gmail.com', formacao: 'graduando', github: 'https://github.com/frederr97', lattes: 'http://lattes.cnpq.br/6452558884220881', password: "123456",image: "https://alice.dcomp.ufsj.edu.br/wp-content/uploads/2018/08/rabbit-600-230x300.png"},
				{nome: 'Flavio Schiavoni', email: 'fls@ufsj.edu.br', formacao: 'professor', github: 'https://github.com/flschiavoni', lattes: 'http://lattes.cnpq.br/1259591090948385', password: "flavio", image: "https://alice.dcomp.ufsj.edu.br/wp-content/uploads/2018/08/rabbit-600-230x300.png"}
			]
		dbo.collection('colaboradores').insertMany(db_alunos, function(err,res){
			if(err) throw err
				console.log('colaboradores inseridos')
			db.close()
		})
	})
	/*Criação da Coleção de publicações*/
	dbo.createCollection( 'publicacoes', function(err,res){
		var db_disc = [
		{code: 'SBCM2017Mosaicode', nome: 'Web Audio application development with Mosaicode', evento: '16th Brazilian Symposium on Computer Music', ano: '2017', local_evento: ' São Paulo',autores: ['fls@ufsj.edu.br'],link: 'alice.dcomp.ufsj.edu.br/wp-content/uploads/2018/05/VR-DigitalArts-Mosaicode.pdf'},
		{code: 'CBSOFTTools2018Mosaicode', nome: 'O Ambiente de Programação Visual Mosaicode', evento: '9ª Sessão de Ferramentas do CBSoft', ano: '2018', local_evento: ' São Carlos',autores: ['fls@ufsj.edu.br'],link: 'https://www.revistas.ufg.br/musica/article/view/53577'},
		{code: 'UBIMUS2018Mosaicode', nome: 'Utilização do Ambiente Mosaicode como ferramenta de apoio para o ensino de Computação Musical', evento: 'VIII Workshop on Ubiquitous Music (UBIMUS)', ano: '2018', local_evento: ' São João del-Rei',autores: ['fls@ufsj.edu.br'],link: 'http://sibgrapi.sid.inpe.br/rep/sid.inpe.br/sibgrapi/2018/10.17.13.54?metadatarepository=sid.inpe.br/sibgrapi/2018/10.17.13.54.46&ibiurl.backgroundlanguage=pt&ibiurl.requiredsite=sibgrapi.sid.inpe.br+800&requiredmirror=sid.inpe.br/banon/2001/03.30.15.38.24&searchsite=sibgrapi.sid.inpe.br:80&searchmirror=sid.inpe.br/banon/2001/03.30.15.38.24&choice=briefTitleAuthorMisc'}
		]
		dbo.collection('publicacoes').insertMany(db_disc, function(err,res){
			if(err) throw err
				console.log('publicacoes inseridos')
			db.close()
		})
	})
	/*Criação da Coleção de projetos*/
	dbo.createCollection( 'projetos', function(err,res){
		var db_disc = [
		{nome: 'Mosaicode', descricao: 'Mosaicode is a visual programming environment that aims to meet the specific demands of the field of Digital Arts and generate applications for this field.	It is aimed that this tool will help artists to develop their work in a simple and practical way.', image: 'https://mosaicode.github.io/media/logo.png'},
		{nome: 'Orchidea', descricao: 'Orquestra de Ideias',image: 'https://alice.dcomp.ufsj.edu.br/wp-content/uploads/2018/08/rabbit-600-230x300.png'}
		]
		dbo.collection('projetos').insertMany(db_disc, function(err,res){
			if(err) throw err
				console.log('projetos inseridos')
			db.close()
		})
	})
	/*Criação da Coleção de eventos*/
/*	dbo.createCollection( 'eventos', function(err,res){
		var db_disc = [
		{nome: 'Ubimus', descricao: 'Congresso de Musica Ubiqua', Data_Inicio: '11/09/2018', Data_Fim: '14/09/2018'},
		{nome: 'SBCM', descricao: 'Simpósio Brasileiro de Computação Musical', Data_Inicio:'09/09/2018', Data_Fim: '12/09/2018'}
		]
		dbo.collection('eventos').insertMany(db_disc, function(err,res){
			if(err) throw err
			console.log('eventos inseridos')
			db.close()
		})
	})*/
})