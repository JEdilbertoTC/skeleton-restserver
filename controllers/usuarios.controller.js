const { response } = require('express');

const usuarioGet = (req, res = response) => {
	const { q, apikey, nombre = 'No name' } = req.query; //obtener los parametros del url se separan por '&'
	res.json({
		msg: 'get API - controller',
		q,
		apikey,
		nombre,
	});
};

const usuarioPut = (req, res) => {
	const id = req.params.id;
	res.json({
		msg: 'put API - controller',
		id,
	});
};

const usuarioDelete = (req, res) => {
	res.json({
		msg: 'delete API - controller',
	});
};

const usuarioPost = (req, res) => {
	const body = req.body;
	res.json({
		msg: 'post API - controller',
		body,
	});
};

module.exports = {
	usuarioGet,
	usuarioPut,
	usuarioDelete,
	usuarioPost,
};
