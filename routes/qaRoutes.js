const express = require("express");
const { askQuestion } = require("../controllers/qaController");

const router = express.Router();

// Route for asking questions
router.post("/ask", askQuestion);

module.exports = router;
