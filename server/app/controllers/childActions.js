// Import access to database tables
const tables = require("../../database/tables");

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the child data from the request body
  const child = req.body;

  try {
    // Insert the child into the database
    const insertId = await tables.child.create(
      child.firstname,
      child.lastname,
      child.birthday,
      child.is_walker,
      child.is_disabled,
      child.allergies,
      child.insurance_certificate,
      child.health_book,
      child.birth_certificate,
      child.name_doctor,
      child.care_authorization,
      child.parent_id
    );

    if(insertId > 0){

      // Respond with HTTP 201 (Created) and the ID of the newly inserted child
      res.status(201).json({ insertId });
    } else{
      res.sendStatus(500);
    }
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
    if (child === null) {
      res.sendStatus(404);
    } else {
      res.json(child);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

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

const edit = async (req, res, next) => {
  try {

    const body = {
      id : req.params.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday: req.body.birthday,
      is_walker: req.body.is_walker,
      is_disabled: req.body.is_disabled,
      allergies: req.body.allergies,
      insurance_certificate: req.body.insurance_certificate,
      health_book: req.body.health_book,
      birth_certificate: req.body.birth_certificate,
      name_doctor: req.body.name_doctor,
      care_authorization: req.body.care_authorization,
      parent_id: req.body.parent_id
    }
    // Delete the nursery from the database based on the provided ID
    const updateChild = await tables.child.update(body);

    // If the deletion was successful, respond with HTTP 200 (OK)
    // Otherwise, respond with HTTP 404 (Not Found)
    if (updateChild.affectedRows > 0) {
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
    // Delete the child from the database based on the provided ID
    const success = await tables.child.delete(id);

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
