const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    email: { type: String, default: ''},
    phone: { type: String, default: ''},
    fullname: { type: String, default: ''},
    roles: {type: Array, default: []},
    status: { type: String, default: 'noactive'},
    type_regis: { type: String, default: 'WE'},
    
}, { collection: 'users' })

users.index({ email: 1}) //Nơi đánh index
module.exports = mongoose.model('users', users)