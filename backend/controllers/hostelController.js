const db = require("../config/db");

exports.saveHostelDetails = (req, res) => {
  const { userId, hostel, block_name, room_no } = req.body;

  if (!userId || !hostel || !block_name || !room_no)
    return res.status(400).json({ message: "All fields required" });

  db.query(
    "UPDATE users SET hostel=?, block_name=?, room_no=?, role='Student' WHERE user_id=?",
    [hostel, block_name, room_no, userId],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      res.json({ message: "Registration completed" });
    }
  );
};
