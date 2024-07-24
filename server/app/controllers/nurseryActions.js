const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

// Import access to database tables
const tables = require("../../database/tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  if (req.body.password) {
    argon2
      .hash(req.body.password, hashingOptions)
      .then((hashedPassword) => {
        req.body.password = hashedPassword;
        next();
      })
      .catch((err) => {
        console.error(err.message);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(401);
  }
};


const resultIsPasswordValid = async (password, hashedPassword) => {
  try {
    return await argon2.verify(hashedPassword, password);
  } catch (err) {
    console.error(err);
    return false;
  }
};

const login = async (req, res, next) => {
  try {
    const nursery = await tables.nursery.readByEmail(req.body.email);
    if (!nursery) {
      res.sendStatus(401);
      return;
    }

    const resultPasswordValid = await resultIsPasswordValid(req.body.password, nursery.password);
    if (!resultPasswordValid) {
      res.sendStatus(401);
      return;
    }

    const payload = { sub: nursery.id };
    const token = jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1h",
    });
    
    delete nursery.password;

    if (token) res.status(200).send({ token, nursery });
    else throw new Error("Token not created");

  } catch (error) {
    next(error);
  }
};

const credentialsValidation = (req, res, next) => {
  const { email, password } = req.body;
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isEmailValid || !isPasswordValid) {
    res.sendStatus(401);
    return;
  }

  next();
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the nursery data from the request body
  const nursery = req.body;

  try {
    // Insert the nursery into the database
    const insertId = await tables.nursery.create(
      nursery.name,
      nursery.email,
      nursery.password,
      nursery.siret,
      nursery.address,
      nursery.postcode,
      nursery.city,
      nursery.phone,
      nursery.type_of_nursery,
      nursery.capacity,
      nursery.opening_hours,
      nursery.closing_time,
      nursery.hourly_price,
      nursery.agrement,
      nursery.photo_1,
      nursery.photo_2,
      nursery.photo_3,
      nursery.description_nursery,
      nursery.disabled_children,
      nursery.outdoor_space,
      nursery.presence_of_animals,
      nursery.meal,
      nursery.hygiene_product,
      nursery.music_workshop,
      nursery.artistic_activities,
      nursery.bilingual_international,
      nursery.child_transport,
      nursery.code_of_conduct
    );

    if (insertId > 0) {
      // Respond with HTTP 201 (Created) and the ID of the newly inserted nursery
      res.status(201).json(insertId);
    } else {
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
    // Fetch a specific nursery from the database based on the provided ID
    const nursery = await tables.nursery.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (nursery === null) {
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

const edit = async (req, res, next) => {
  try {
    const body = {
      id: req.params.id,
      name: req.body.name,
      siret: req.body.siret,
      address: req.body.address,
      postcode: req.body.postcode,
      city: req.body.city,
      phone: req.body.phone,
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
      code_of_conduct: req.body.code_of_conduct,
    };
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
    const { id } = req.params;
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
  hashPassword,
  resultIsPasswordValid,
  login,
  credentialsValidation,
};
