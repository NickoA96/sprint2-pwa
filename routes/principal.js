const express = require('express');
const router = express.Router();
const {
    principal
} = require('../controllers/controllersPrincipal');

router.get('/', principal);

module.exports = router;