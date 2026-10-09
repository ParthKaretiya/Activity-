/**
 * User Controller
 * Handles business logic for user-related requests in MVC architecture.
 */
const User = require('../models/user');

// Centralized error response utility
const sendError = (res, status, message) => {
    return res.status(status).json({ success: false, error: message });
};

// Query sanitizer for safe filtering
const sanitizeQuery = (params) => {
    const clean = {};
    if (params.search) clean.name = { $regex: String(params.search).trim(), $options: 'i' };
    if (params.role) clean.role = String(params.role).trim();
    return clean;
};

// GET total user count
const getUserCount = async (req, res) => {
    try {
        const count = await User.countDocuments();
        res.json({ success: true, count });
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

// Bulk create users
const bulkCreateUsers = async (req, res) => {
    try {
        if (!Array.isArray(req.body) || req.body.length === 0) {
            return sendError(res, 400, "Array of users is required");
        }
        const createdUsers = await User.insertMany(req.body);
        res.status(201).json({ success: true, count: createdUsers.length, users: createdUsers });
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

// GET all users with filtering, sorting, and pagination
const getAllUsers = async (req, res) => {
    try {
        const { sortBy = 'createdAt', order = 'desc', fields } = req.query;
        const query = sanitizeQuery(req.query);

        const sortOrder = order === 'asc' ? 1 : -1;
        const projection = fields ? fields.split(',').join(' ') : '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const users = await User.find(query).select(projection).sort({ [sortBy]: sortOrder }).skip(skip).limit(limit);
        res.json({ success: true, page, limit, users });
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

// GET user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return sendError(res, 404, "User not found");
        }
        res.json({ success: true, user });
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

// POST create user with validation
const createUser = async (req, res) => {
    try {
        if (!req.body.name) {
            return sendError(res, 400, "Name is required");
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

// PUT update user by ID
const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return sendError(res, 404, "User not found");
        }
        res.json({ success: true, user: updatedUser });
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

// PATCH partial update user by ID
const patchUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedUser) {
            return sendError(res, 404, "User not found");
        }
        res.json({ success: true, user: updatedUser });
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

// Toggle user active status
const toggleUserStatus = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return sendError(res, 404, "User not found");
        }
        user.isActive = !user.isActive;
        await user.save();
        res.json({ success: true, message: "Status updated", isActive: user.isActive });
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

// DELETE remove user by ID
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return sendError(res, 404, "User not found");
        }
        res.json({ success: true, message: "User deleted successfully", user: deletedUser });
    } catch (err) {
        sendError(res, 500, err.message);
    }
};

module.exports = {
    getUserCount,
    bulkCreateUsers,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    patchUser,
    toggleUserStatus,
    deleteUser
};