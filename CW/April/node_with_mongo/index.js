const express = require('express')
const app = express();
const mongoose = require('mongoose')
app.use(express.json());

//connection
mongoose.connect('mongodb://localhost:27017/Flipkart')
                .then(() => console.log("Mongo connected"))
                .catch((err) => console.log(err))

//create schema 

app.use((req , res , next)=>{
    console.log("Hello from middleware ")
    next()
})




app.get('/user', async (req, res) => {
    try {
        const users = await User.find();
        const users1 = await users.map((n)=> n.name)
        res.json(users1);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/user', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/' , (req,res)=>{
    res.end("Hello")
})



app.listen(3000 , ()=>{
    console.log("Server Started on port 3000");
    
})