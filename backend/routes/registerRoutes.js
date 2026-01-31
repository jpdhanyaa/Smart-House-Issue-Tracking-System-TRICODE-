const router = require("express").Router();
const c = require("../controllers/registerController");
router.post("/register", c.register);
module.exports = router;
