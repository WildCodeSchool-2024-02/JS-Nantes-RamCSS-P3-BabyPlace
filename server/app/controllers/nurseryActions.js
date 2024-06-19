/* eslint-disable camelcase */
// Import access to database tables
const tables = require("../../database/tables");

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

    if (insertId > 0) {
      // Respond with HTTP 201 (Created) and the ID of the newly inserted nursery
      res.status(201).json( insertId );
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

// // The E of BREAD - Edit (Update) operation
// const edit = async (req, res, next) => {
//   // Extract the nursery data from the request body
//   const nursery = req.body;

//   try {
//     // Update the nursery in the database
//     const success = await tables.nursery.update(nursery);

//     // If the update was successful, respond with HTTP 200 (OK)
//     // Otherwise, respond with HTTP 404 (Not Found)
//     if (success) {
//       res.sendStatus(200);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };



const edit = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const { siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity,opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
    //   presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct } = req.body;

    const body = {
      id : req.params,
      siret: req.body.siret, 
      name: req.body.name, 
      address: req.body.address, 
      postal_code: req.body.postal_code, 
      city: req.body.city, 
      phone: req.body.phone, 
      email: req.body.email, 
      type_of_nursery: req.body.type_of_nursery, 
      capacity: req.body.capacity,
      opening_hours: req.body.opening_hours, 
      closing_time: req.body.closing_time, 
      hourly_price: req.body.hourly_price, 
      agrement: req.body.agrement, 
      photo_1: req.body.photo_1, 
      photo_2: req.body.photo_2, 
      photo_3: req.body.photo_3, 
      description_nursery: req.body.description_nursery, 
      disabled_children: req.body.disabled_children, 
      outdoor_space: req.body.outdoor_space,
      presence_of_animals: req.body.presence_of_animals, 
      meal: req.body.meal, 
      hygiene_product: req.body.hygiene_product, 
      music_workshop: req.body.music_workshop, 
      artistic_activities: req.body.artistic_activities, 
      bilingual_international: req.body.bilingual_international, 
      child_transport: req.body.child_transport, 
      code_of_conduct: req.body.code_of_conduct
    }
    // Delete the nursery from the database based on the provided ID
    const updateNursery = await tables.nursery.update(body);

    // If the deletion was successful, respond with HTTP 200 (OK)
    // Otherwise, respond with HTTP 404 (Not Found)
    if (updateNursery.affectedRows > 0) {
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
    const {id} = req.params
    // Delete the nursery from the database based on the provided ID
    const success = await tables.nursery.delete(id);

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
  add,
  edit,
  destroy,
};
