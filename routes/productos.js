const express = require('express');
const router = express.Router();
const {
    productos,
    productosPost
} = require('../controllers/controllersProductos');


router.get('/', productos);
router.post('/', productosPost);




module.exports = router;


