const bcrypt = require("bcryptjs");
const db = require("../config/db");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "All fields required" });

  const hash = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, hash],
    (err) => {
      if (err)
        return res.status(400).json({ message: "User already exists" });
      res.json({ message: "Registered successfully" });
    }
  );
};
