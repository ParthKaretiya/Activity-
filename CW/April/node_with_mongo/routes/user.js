const express = require('express');
const router = express.Router(); // ✅ fix

const User = require('./models/User'); // make sure this is imported

// GET all users (only names)
router.get('/user', async (req, res) => {
    try {
        const users = await User.find();
        const users1 = users.map((n) => n.name); // ❌ no await needed
        res.json(users1);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// GET user by ID
router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // ✅ correct way

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// POST create user
router.post('/user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Test route
router.get('/', (req, res) => {
    res.send("Hello");
});

module.exports = router;