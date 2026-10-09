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

module.exports = {
    getAllUsers
};