const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    role: { type: String, default: 'user' },
    isActive: { type: Boolean, default: true }
}, { timestamps: true, strict: false });

// Easy file structure to understand MVC architecture

const User = mongoose.model('user' , userSchema)


module.exports = User ;