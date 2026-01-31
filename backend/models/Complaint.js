const db = require("../config/db");

exports.create = (data, cb) => {
  db.query(
    "INSERT INTO complaints (title, description, category, priority, user_id) VALUES (?, ?, ?, ?, ?)",
    [data.title, data.description, data.category, data.priority, data.user_id],
    cb
  );
};
