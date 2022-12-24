var express = require('express');
var router = express.Router();
var FavouriteFoodController = require('../controllers/favourite_food_controller')


router.get('/', FavouriteFoodController.index);

module.exports = router;