const db = require("../config/db")

exports.createComplaint = (req, res) => {
  const { title, description, category_id, priority, reported_by } = req.body

  const sql = `
    INSERT INTO issues 
    (title, description, category_id, priority, reported_by)
    VALUES (?, ?, ?, ?, ?)
  `

  db.query(
    sql,
    [title, description, category_id, priority, reported_by],
    (err, result) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ message: "Database error" })
      }

      res.status(201).json({
        message: "Complaint registered successfully",
        issue_id: result.insertId
      })
    }
  )
}