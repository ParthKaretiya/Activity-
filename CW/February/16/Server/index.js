const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.post("/users" , (req,res) => {
    console.log("Req body :", req.body);

    const user1 = {
        id : req.body[0].id,
        name : req.body[0].name,
        role : req.body[0].role
    }

    console.log("user1",user1);
    users.push(user1);
    res.status(201).json(user1);


})

app.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id: userId,
    name: req.body.name,
    role: req.body.role
  };

  res.status(200).json({
    message: "User replaced",
    user: users[index]
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});