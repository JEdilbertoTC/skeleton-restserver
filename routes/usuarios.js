const { Router } = require('express');
const {
	usuarioGet,
	usuarioPut,
	usuarioDelete,
	usuarioPost,
} = require('../controllers/usuarios.controller');
const router = Router();

router.get('/', usuarioGet);
router.put('/:id', usuarioPut);
router.post('/', usuarioPost);
router.delete('/', usuarioDelete);

module.exports = router;
