const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Flipkart')
.then(() => console.log('connected to mongoDB'))
.catch(err => console.log('could not connect', err));

app.get('/', (req, res) => {
    res.send('Hello World');
});

const userSchema = new mongoose.Schema({
    // name: String,
    // age: Number,
    // city: String
});

const User = mongoose.model('User', userSchema);

app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); 
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});