
/*
 * GET home page.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catalogo');
var Schema = mongoose.Schema;

var discoSchema = new Schema({
	aritsta: { type: String, required: true },
	album: { type: String, required: true }
        genero: { type: String, required: true }
        ano: { type: String, required: true }
});

var Disco = mongoose.model('disco', discoSchema);
var conexoes = 0;

exports.index = function(req, res){
	conexoes++;
	console.log(conexoes);
	res.render('index', { title: 'Express' });
};

exports.adicionaDisco = function(req, res) {
	var disco = new Disco(req.body);
	disco.save(function(error, disco) {
		if(error) res.send(500);

		res.send(201);
	});
}

exports.listaDiscos = function(req, res) {
	Disco.find({}, function(error, discos) {
		if(error) res.send(500);

		res.json({ discos: discos });
	});
}
