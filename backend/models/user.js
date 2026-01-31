const db = require("../config/db");

exports.findByEmail = (email, cb) => {
  db.query("SELECT * FROM users WHERE email=?", [email], cb);
};
