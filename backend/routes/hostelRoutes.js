const router = require("express").Router();
const c = require("../controllers/hostelController");
router.post("/save", c.saveHostelDetails);
module.exports = router;
