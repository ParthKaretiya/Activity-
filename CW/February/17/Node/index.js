const express = require("express");
const app = express();
app.use(express.json());


const users = [
  { att: '80', uid: 108740, total_sub : '14' , bonus : '20' ,name : "dax" },
  
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});


app.get("/users/:uid", (req, res) => {
  const userId = Number(req.params.uid);
  const user = users.find(u => u.uid === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.post("/users", (req, res) => {
  const newUser = req.body;

  users.push(newUser);

  res.status(201).json({
    message: "User added successfully",
    user: newUser
  });
});



app.put("/users/:uid", (req, res) => {
  const userId = Number(req.params.uid);

  const user = users.find(u => u.uid === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update fields from body
  Object.assign(user, req.body);

  res.status(200).json({
    message: "User updated successfully",
    user
  });
});
 


app.delete("/users/:uid", (req, res) => {
  const userId = Number(req.params.uid);
  const index = users.findIndex(u => u.uid === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.status(204).end();
});





app.listen(3000, () => {
  console.log("Server started on port 3000");
});