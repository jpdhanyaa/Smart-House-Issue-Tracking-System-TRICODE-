const router = require("express").Router();
const c = require("../controllers/complaintController");
router.post("/create", c.createComplaint);
router.get("/", c.getComplaints);
module.exports = router;
