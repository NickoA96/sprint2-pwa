const express = require('express');
const router = express.Router();
const {
    actualizar,
    actualizarPost
} = require('../controllers/controllersActualizar');

router.get('/:id', actualizar);
router.post('/:id', actualizarPost);

module.exports = router;

