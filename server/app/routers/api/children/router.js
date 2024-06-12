const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import child-related actions
const { browse, read, add } = require("../../../controllers/childActions");

// Route to get a list of children
router.get("/", browse);

// Route to get a specific child by ID
router.get("/:id", read);

// Route to add a new child
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
