const db = require("../config/db");

exports.createComplaint = (req, res) => {
  const { title, description, category, priority, user_id } = req.body;

  if (!title || !description || !user_id)
    return res.status(400).json({ message: "All fields required" });

  db.query(
    "INSERT INTO complaints (title, description, category, priority, user_id) VALUES (?, ?, ?, ?, ?)",
    [title, description, category, priority, user_id],
    (err) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.json({ message: "Complaint submitted" });
    }
  );
};

exports.getComplaints = (req, res) => {
  db.query("SELECT * FROM complaints", (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(result);
  });
};
