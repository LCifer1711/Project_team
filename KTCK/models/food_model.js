var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'No Name'
    },
    type: {
        type: String,
        default: 'No Type'
    },
    describe: {
            type: String,
            default: 'No Description'
    },
    price: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('product', productSchema, 'product');