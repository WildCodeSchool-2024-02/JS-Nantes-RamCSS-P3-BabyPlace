const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import parent-related actions
const { browse, read, add } = require("../../../controllers/parentActions");

// Route to get a list of parents
router.get("/", browse);

// Route to get a specific parent by ID
router.get("/:id", read);

// Route to add a new parent
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
