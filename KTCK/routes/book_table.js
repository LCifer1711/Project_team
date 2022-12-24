var express = require('express');
var router = express.Router();
var BookTableController = require('../controllers/book_table_controller')


router.get('/', BookTableController.index);

module.exports = router;