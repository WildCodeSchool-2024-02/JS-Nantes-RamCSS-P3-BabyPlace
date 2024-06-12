// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all reservations from the database
    const reservations = await tables.reservation.readAll();

    // Respond with the reservations in JSON format
    res.json(reservations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific reservation from the database based on the provided ID
    const reservation = await tables.reservation.read(req.params.id);

    // If the reservation is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the reservation in JSON format
    if (reservation == null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the reservation data from the request body
  const reservation = req.body;

  try {
    // Insert the reservation into the database
    const insertId = await tables.reservation.create(reservation);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted reservation
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
