const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/KTCK');
        console.log("DB connected!!!");
    } catch (error) {
        console.log("DB not connect!!!");
    }
}

module.exports = {connect}