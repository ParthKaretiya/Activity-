/**
 * User Router
 * Handles all REST endpoints for user resources in MVC architecture.
 */
const express = require('express');
const router = express.Router();

const User = require('../models/user');

// GET users with pagination support
router.get('/user', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const users = await User.find().skip(skip).limit(limit);
        res.json({ page, limit, users });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// GET user by ID
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// POST create user with validation
router.post('/user', async (req, res) => {
    try {
        if (!req.body.name) {
            return res.status(400).send("Name is required");
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// PUT update user by ID
router.put('/user/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// DELETE remove user by ID
router.delete('/user/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        res.json({ message: "User deleted successfully", user: deletedUser });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Test route
router.get('/', (req, res) => {
    res.send("Hello");
});

module.exports = router;