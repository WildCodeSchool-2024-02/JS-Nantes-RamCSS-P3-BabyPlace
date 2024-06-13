/* eslint-disable camelcase */
// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all nurseries from the database
    const nurseries = await tables.nursery.readAll();

    // Respond with the nurseries in JSON format
    res.json(nurseries);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific nursery from the database based on the provided ID
    const nursery = await tables.nursery.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (nursery == null) {
      res.sendStatus(404);
    } else {
      res.json(nursery);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the nursery data from the request body
  const nursery = req.body;

  try {
    // Update the nursery in the database
    const success = await tables.nursery.update(nursery);

    // If the update was successful, respond with HTTP 200 (OK)
    // Otherwise, respond with HTTP 404 (Not Found)
    if (success) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the nursery data from the request body
  const {
    siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity,opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
    presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct } = req.body;

  try {
    // Insert the nursery into the database
    const insertId = await tables.nursery.create(
      siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity,opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
    presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct );

    // Respond with HTTP 201 (Created) and the ID of the newly inserted nursery
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    // Delete the nursery from the database based on the provided ID
    const success = await tables.nursery.delete(req.params.id);

    // If the deletion was successful, respond with HTTP 200 (OK)
    // Otherwise, respond with HTTP 404 (Not Found)
    if (success) {
      res.sendStatus(200);
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
