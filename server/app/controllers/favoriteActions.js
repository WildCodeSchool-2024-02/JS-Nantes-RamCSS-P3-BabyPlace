// Import access to database tables
const tables = require("../../database/tables");

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the favorite data from the request body
  const favorite = req.body;

  try {
    // Insert the favorite into the database
    const insertId = await tables.favorite.create(
      favorite.nursery_id,
      favorite.parent_id
    );

    // Respond with HTTP 201 (Created) and the ID of the newly inserted favorite
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific favorite from the database based on the provided ID
    const favorite = await tables.favorite.read(req.params.id);

    // If the favorite is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the favorite in JSON format
    if (favorite === null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(favorite);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all favorites from the database
    const favorites = await tables.favorite.readAll();

    // Respond with the favorites in JSON format
    res.json(favorites);
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
    const success = await tables.favorite.delete(id);

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
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  add,
  destroy,
};
