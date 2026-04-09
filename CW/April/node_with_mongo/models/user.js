const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({}, { strict: false });

// Easy file

const User = mongoose.model('user' , userSchema)


module.exports = User ;