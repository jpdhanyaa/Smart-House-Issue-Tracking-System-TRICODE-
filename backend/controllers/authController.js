const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.login = (req, res) => {
  const { email, password, rememberMe } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "All fields required" });

  User.findByEmail(email, async (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (result.length === 0)
      return res.status(400).json({ message: "User not found" });

    const user = result[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user.user_id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: rememberMe ? "30d" : "1d" }
    );

    const isNewUser = !user.hostel;

    res.json({
      token,
      isNewUser,
      user: {
        id: user.user_id,
        email: user.email,
        role: user.role
      }
    });
  });
};
