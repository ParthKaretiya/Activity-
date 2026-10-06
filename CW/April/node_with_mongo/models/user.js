const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    role: { type: String, default: 'user' },
    isActive: { type: Boolean, default: true }
}, { timestamps: true, strict: false });

// Indexing for faster email queries
userSchema.index({ email: 1 });

// Pre-save middleware hook
userSchema.pre('save', function (next) {
    next();
});

// Instance method to get user summary
userSchema.methods.getSummary = function () {
    return `${this.name} (${this.email})`;
};

// Easy file structure to understand MVC architecture

const User = mongoose.model('user' , userSchema)


module.exports = User ;