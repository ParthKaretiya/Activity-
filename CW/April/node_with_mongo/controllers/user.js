/**
 * User Controller
 * Handles business logic for user-related requests in MVC architecture.
 */
const User = require('../models/user');

// GET all users with filtering, sorting, and pagination
const getAllUsers = async (req, res) => {
    try {
        const { search, role, sortBy = 'createdAt', order = 'desc', fields } = req.query;
        const query = {};
        if (search) query.name = { $regex: search, $options: 'i' };
        if (role) query.role = role;

        const sortOrder = order === 'asc' ? 1 : -1;
        const projection = fields ? fields.split(',').join(' ') : '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const users = await User.find(query).select(projection).sort({ [sortBy]: sortOrder }).skip(skip).limit(limit);
        res.json({ success: true, page, limit, users });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// GET user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.json({ success: true, user });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// POST create user with validation
const createUser = async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).json({ success: false, error: "Name is required" });
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// PUT update user by ID
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.json({ success: true, user: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// DELETE remove user by ID
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        res.json({ success: true, message: "User deleted successfully", user: deletedUser });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};