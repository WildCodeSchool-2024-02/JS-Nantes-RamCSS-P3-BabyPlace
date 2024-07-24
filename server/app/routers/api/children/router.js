const express = require("express");

const router = express.Router();

// Import child-related actions
const {
  browseByParentId,
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/childActions");

// Route to get a list of children
router.get("/", browse);

// !Route to get all children for a specific parent
router.get("/parent/:parentId", browseByParentId);

// Route to get a specific child by ID
router.get("/:id", read);

// Route to add a new child
router.post("/", add);

// Route to edit an existing child
router.put("/:id", edit);

// Route to delete a child
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
