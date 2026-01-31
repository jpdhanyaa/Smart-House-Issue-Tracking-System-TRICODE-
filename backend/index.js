require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const registerRoutes = require("./routes/registerRoutes");
const hostelRoutes = require("./routes/hostelRoutes");
const complaintRoutes = require("./routes/complaintRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/auth", authRoutes);
app.use("/api/auth", registerRoutes);
app.use("/api/hostel", hostelRoutes);
app.use("/api/complaints", complaintRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/login.html"));
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
