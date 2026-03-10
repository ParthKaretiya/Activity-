const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Flipkart")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log("MongoDB Connection Failed", error));


const userSchema = new mongoose.Schema({});

const User = mongoose.model("users", userSchema);


const orderSchema = new mongoose.Schema({});

const Order = mongoose.model("orders", orderSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Server is working");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});