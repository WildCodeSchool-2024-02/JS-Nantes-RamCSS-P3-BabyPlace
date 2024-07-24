// Import access to database tables
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
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
    const parent = await tables.parent.readByEmail(req.body.email);
    if (!parent) {
      res.sendStatus(401);
      return;
    }

    const resultPasswordValid = await resultIsPasswordValid(req.body.password, parent.password);
    if (!resultPasswordValid) {
      res.sendStatus(401);
      return;
    }

    const payload = { sub: parent.id };
    const token = jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1h",
    });
    
    delete parent.password;

    if (token) res.status(200).send({ token, parent });
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
  // Extract the parent data from the request body
  const parent = req.body;

  try {
    // Insert the parent into the database
    const insertId = await tables.parent.create(
      parent.firstname,
      parent.lastname,
      parent.password,
      parent.job,
      parent.phone,
      parent.email,
      parent.address,
      parent.identity_card,
      parent.photo,
      parent.social_security_number,
      parent.caf_number,
      parent.proof_of_income,
      parent.taxe_filling,
      parent.proof_of_adress,
      parent.proof_of_professional_status,
      parent.rib,
      parent.photo_and_video_authorization,
      parent.exit_permit,
      parent.copy_of_family_record_book,
      parent.copy_of_divorce_judgment,
      parent.conditions_of_use
    );

    if (insertId > 0) {
      // Respond with HTTP 201 (Created) and the ID of the newly inserted parent
      res.status(201).json({ insertId });
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
    // Fetch a specific parent from the database based on the provided ID
    const parent = await tables.parent.read(req.params.id);

    // If the parent is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the parent in JSON format
    if (parent === null) {
      res.sendStatus(404);
    } else {
      res.json(parent);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

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

// The B of BREAD - Browse (Read All) operation
const browseAllFavoritesByParentId = async (req, res, next) => {
  const { id } = req.params;
  try {
    // Fetch all parents from the database
    const favoritesByParent =
      await tables.parent.readAllFavoritesByParentId(id);

    // Respond with the parents in JSON format
    res.status(200).json(favoritesByParent);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// /:id/favorites

const edit = async (req, res, next) => {
  try {
    const body = {
      id: req.params.id,
      firstname: req.body.firstname,
      password: req.body.password,
      email: req.body.email,
      lastname: req.body.lastname,
      job: req.body.job,
      phone: req.body.phone,
      address: req.body.address,
      identity_card: req.body.identity_card,
      photo: req.body.photo,
      social_security_number: req.body.social_security_number,
      caf_number: req.body.caf_number,
      proof_of_income: req.body.proof_of_income,
      taxe_filling: req.body.taxe_filling,
      proof_of_adress: req.body.proof_of_adress,
      proof_of_professional_status: req.body.proof_of_professional_status,
      rib: req.body.rib,
      photo_and_video_authorization: req.body.photo_and_video_authorization,
      exit_permit: req.body.exit_permit,
      copy_of_family_record_book: req.body.copy_of_family_record_book,
      copy_of_divorce_judgment: req.body.copy_of_divorce_judgment,
      conditions_of_use: req.body.conditions_of_use,
    };
    // Delete the nursery from the database based on the provided ID
    const updateParent = await tables.parent.update(body);

    // If the deletion was successful, respond with HTTP 200 (OK)
    // Otherwise, respond with HTTP 404 (Not Found)
    if (updateParent.affectedRows > 0) {
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
  // Extract the parent ID from the request parameters
  try {
    const { id } = req.params;
    const success = await tables.parent.delete(id);

    if (success.affectedRows === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  browseAllFavoritesByParentId,
  read,
  edit,
  add,
  destroy,
  hashPassword,
  resultIsPasswordValid,
  login,
  credentialsValidation,
};
