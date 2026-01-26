const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/api/test", (req, res) => {
  res.send("Backend API is working");
});

app.post("/complaints", (req, res) => {
  const { studentName, issueTitle, description } = req.body;

  console.log("Complaint received:");
  console.log(studentName, issueTitle, description);

  res.send("Complaint received successfully");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});