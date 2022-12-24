var express = require('express');
var router = express.Router();
var FavouriteFoodController = require('../controllers/cart_controller')


router.get('/', FavouriteFoodController.index);

module.exports = router;