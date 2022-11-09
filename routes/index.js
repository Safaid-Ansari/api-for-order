const express = require("express");
const router = express.Router();

router.use("/url", require("./user"));
module.exports = router;
