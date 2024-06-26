const express = require("express");

const router = express.Router();

// Import nursery-related actions
const {
  browse,
  read,
  add,
  edit,
  destroy,
} = require("../../../controllers/nurseryActions");

// Route to get a list of nurseries
router.get("/", browse);

// Route to get a specific nursery by ID
router.get("/:id", read);

// Route to add a new nursery
router.post("/", add);

// Route to update an existing nursery
router.put("/:id", edit);

// Route to delete a specific nursery by ID
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
