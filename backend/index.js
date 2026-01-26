require("dotenv").config()
const express = require("express")
const path = require("path")
const db = require("./config/db")
const complaintRoutes = require("./routes/complaintRoutes")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "../frontend")))

app.use("/api", complaintRoutes)

app.get("/api/test", (req, res) => {
  res.send("Backend API is working with MySQL")
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"))
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})