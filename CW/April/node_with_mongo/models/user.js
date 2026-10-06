/**
 * User Model
 * Defines Mongoose schema and methods for User entity in MVC architecture.
 */
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    role: { type: String, default: 'user' },
    isActive: { type: Boolean, default: true }
}, { 
    timestamps: true, 
    strict: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

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

// Static method to find active users
userSchema.statics.findActiveUsers = function () {
    return this.find({ isActive: true });
};

// Virtual property for display name
userSchema.virtual('displayName').get(function () {
    return this.name || 'Anonymous';
});

// Easy file structure to understand MVC architecture

const User = mongoose.model('user' , userSchema)

// Export User model for controller usage
module.exports = User ;