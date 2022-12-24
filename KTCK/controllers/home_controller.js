

var Product = require('../models/food_model');

async function index (req, res, next) {
    res.render("home/home");
}

module.exports = {
    index
}