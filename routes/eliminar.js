const express = require('express');
const router = express.Router();
const {
    eliminar
} = require('../controllers/controllersEliminar');

router.get('/:id', eliminar);

module.exports = router;