// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all parents from the database
    const parents = await tables.parent.readAll();

    // Respond with the parents in JSON format
    res.json(parents);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific parent from the database based on the provided ID
    const parent = await tables.parent.read(req.params.id);

    // If the parent is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the parent in JSON format
    if (parent == null) {
      res.sendStatus(404);
    } else {
      res.json(parent);
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
  // Extract the parent data from the request body
  const parent = req.body;

  try {
    // Insert the parent into the database
    const insertId = await tables.parent.create(parent);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted parent
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
