const express = require('express');
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		//Middlewares
		this.middlewares();
		//Rutas aplicacion
		this.routes();
	}

	middlewares() {
		//cors
		this.app.use(cors());
		//lectura y parseo del body
		this.app.use(express.json());
		//public directory
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use('/api/usuarios', require('../routes/usuarios'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Running in port', this.port);
		});
	}
}

module.exports = Server;
