const express = require('express');
const controller = require('../controllers/controller');
var router = express.Router();


router.get('/convert', controller.convertPDF);
module.exports = router;