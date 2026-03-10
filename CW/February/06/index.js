const express = require("express");
const app = express();


const students = [
  {
    studentName: "ABDUL HAQUE",
    University: "SUxCG 714",
    gr_number: "108444"
  },
  {
    studentName: "ADITYA KUMAR",
    University: "SUxCG 702",
    gr_number: "108716"
  },
  {
    studentName: "AMAN KUMAR",
    University: "SUxCG 702",
    gr_number: "108500"
  },
  {
    studentName: "AMRIT RAJ",
    University: "SUxCG 702",
    gr_number: "108587"
  }
];

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Student API");
});

// Get all students
app.get("/cg/students", (req, res) => {
  res.status(200).json(students);
});

// Get student by GR number
app.get("/cg/students/:gr_number", (req, res) => {
  const grNumber = req.params.gr_number;

  // Find the student
  const student = students.find(s => s.gr_number === grNumber);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

// Start server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
