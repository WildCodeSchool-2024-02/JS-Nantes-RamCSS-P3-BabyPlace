const express = require("express");

const router = express.Router();

// Import reservation-related actions
const {
  browse,
  read,
  add,
  edit,
  destroy,
} = require("../../../controllers/reservationActions");

// Route to get a list of reservations
router.get("/", browse);

// Route to get a specific reservation by ID
router.get("/:id", read);

// Route to add a new reservation
router.post("/", add);

// Route to update an existing reservation
router.put("/:id", edit);

// Route to delete a specific reservation by ID
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
