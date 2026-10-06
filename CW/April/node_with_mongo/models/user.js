const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
}, { strict: false });

// Easy file structure to understand MVC architecture

const User = mongoose.model('user' , userSchema)


module.exports = User ;