/**
 * User Router
 * Handles all REST endpoints for user resources in MVC architecture.
 */
const express = require('express');
const router = express.Router();

const User = require('../models/user');

// Centralized error response helper
const handleError = (res, status, message) => {
    return res.status(status).json({ success: false, error: message });
};

// GET users with pagination, search, sorting, and field selection
router.get('/user', async (req, res) => {
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
        handleError(res, 500, err.message);
    }
});

// GET user by ID
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return handleError(res, 404, "User not found");
        }

        res.json({ success: true, user });
    } catch (err) {
        handleError(res, 500, err.message);
    }
});

// POST create user with validation
router.post('/user', async (req, res) => {
    try {
        if (!req.body.name) {
            return handleError(res, 400, "Name is required");
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ success: true, user: newUser });
    } catch (err) {
        handleError(res, 500, err.message);
    }
});

// PUT update user by ID
router.put('/user/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return handleError(res, 404, "User not found");
        }
        res.json({ success: true, user: updatedUser });
    } catch (err) {
        handleError(res, 500, err.message);
    }
});

// PATCH partial update user by ID
router.patch('/user/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedUser) {
            return handleError(res, 404, "User not found");
        }
        res.json({ success: true, user: updatedUser });
    } catch (err) {
        handleError(res, 500, err.message);
    }
});

// DELETE remove user by ID
router.delete('/user/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return handleError(res, 404, "User not found");
        }
        res.json({ success: true, message: "User deleted successfully", user: deletedUser });
    } catch (err) {
        handleError(res, 500, err.message);
    }
});

// Test route
router.get('/', (req, res) => {
    res.send("Hello");
});

module.exports = router;