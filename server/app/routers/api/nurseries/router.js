const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import nursery-related actions
const { browse, read, add } = require("../../../controllers/nurseryActions");

// Route to get a list of nurseries
router.get("/", browse);

// Route to get a specific nursery by ID
router.get("/:id", read);

// Route to add a new nursery
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
