const express = require("express");

const router = express.Router();

// Import parent-related actions
const {
  browse,
  browseAllFavoritesByParentId,
  read,
  add,
  edit,
  destroy,
  hashPassword,
  verifyPassword,
  login,
  credentialsValidation,
} = require("../../../controllers/parentActions");

// Route to get a list of parents
router.get("/", browse);

// Route to get a specific parent by ID
router.get("/:id", read);

// Route to get all favorites for a specific parent by ID
router.get("/:id/favorites", browseAllFavoritesByParentId);

// Route to add a new parent
router.post("/", hashPassword, credentialsValidation, add);

// Route to edit an existing parent
router.post("/login", login, verifyPassword);

// Route to connect an nursery
router.post("/login", credentialsValidation, login);

// Route to edit an existing parent
router.put("/:id", edit);

// Route to delete a parent
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
