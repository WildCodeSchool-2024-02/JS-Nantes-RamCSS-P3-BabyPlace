// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all children from the database
    const children = await tables.child.readAll();

    // Respond with the children in JSON format
    res.json(children);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific child from the database based on the provided ID
    const child = await tables.child.read(req.params.id);

    // If the child is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the child in JSON format
    if (child == null) {
      res.sendStatus(404);
    } else {
      res.json(child);
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
  // Extract the child data from the request body
  const child = req.body;

  try {
    // Insert the child into the database
    const insertId = await tables.child.create(child);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted child
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
