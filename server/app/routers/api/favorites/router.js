const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import favorite-related actions
const { browse, read, add, destroy } = require("../../../controllers/favoriteActions");

// Route to get a list of favorites
router.get("/", browse);

// Route to get a specific favorite by ID
router.get("/:id", read);

// Route to add a new favorite
router.post("/", add);

// Route to delete a favorite
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
