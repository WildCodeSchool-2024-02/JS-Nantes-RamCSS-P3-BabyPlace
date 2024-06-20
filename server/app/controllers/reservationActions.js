// Import access to database tables
const tables = require("../../database/tables");

const add = async (req, res, next) => {
  // Extract the reservation data from the request body
  const reservation = req.body;

  try {
    // Insert the reservation into the database
    const insertId = await tables.reservation.create(
      reservation.reservation_date, 
      reservation.reservation_status, 
      reservation.status_date, 
      reservation.arriving_date, 
      reservation.exit_date, 
      reservation.price, 
      reservation.nursery_id, 
      reservation.child_id 
    );

    if (insertId > 0) {
      // Respond with HTTP 201 (Created) and the ID of the newly inserted reservation
      res.status(201).json({ insertId });
    } else {
      res.sendStatus(500)
    }
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
    if (reservation === null) {
      res.sendStatus(404);
    } else {
      res.json(reservation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

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

const edit = async (req, res, next) => {
  try {

    const body = {
      id : req.params.id,
      reservation_date: req.body.reservation_date, 
      reservation_status: req.body.reservation_status, 
      status_date: req.body.status_date, 
      arriving_date: req.body.arriving_date, 
      exit_date: req.body.exit_date, 
      price: req.body.price, 
      nursery_id: req.body.nursery_id, 
      child_id: req.body.child_id
    }
    // Delete the nursery from the database based on the provided ID
    const updateReservation = await tables.reservation.update(body);

    // If the deletion was successful, respond with HTTP 200 (OK)
    // Otherwise, respond with HTTP 404 (Not Found)
    if (updateReservation.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const {id} = req.params;
    // Delete the reservation from the database based on the provided ID
    const success = await tables.reservation.delete(id);

    // If the deletion was successful, respond with HTTP 200 (OK)
    // Otherwise, respond with HTTP 404 (Not Found)
    if (success.affectedRows === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
