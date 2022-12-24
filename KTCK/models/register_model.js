const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const register = new Schema({
    email: { type: String, default: ''},
    password: { type: String, default: ''},    
})

module.exports = mongoose.model('register', register)