

const express = require('express');
const router = express.Router();
const {
    consultas,
} = require('../controllers/controllersConsultas');


router.get('/', consultas);

module.exports = router;



