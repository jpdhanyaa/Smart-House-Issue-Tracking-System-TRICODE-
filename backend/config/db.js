const mysql = require("mysql2")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dhanyaa@2006",
  database: "tricodedb"
})

db.connect((err) => {
  if (err) {
    console.log("MySQL connection failed")
    console.log(err)
    return
  }
  console.log("MySQL connected")
})

module.exports = db
