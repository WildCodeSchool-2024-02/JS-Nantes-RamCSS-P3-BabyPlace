const express = require("express");

const router = express.Router();

// * --NUSERIES------------------------------------------------------

const nurseriesRouter = require("./nurseries/router");

router.use("/nurseries", nurseriesRouter);

// * --CHILDREN------------------------------------------------------

const childrenRouter = require("./children/router");

router.use("/children", childrenRouter);

// * --PARENTS------------------------------------------------------

const parentsRouter = require("./parents/router");

router.use("/parents", parentsRouter);

// * --RESERVATIONS------------------------------------------------------

const reservationsRouter = require("./reservations/router");

router.use("/reservations", reservationsRouter);

// * --FAVORITES------------------------------------------------------

const favoritesRouter = require("./favorites/router");

router.use("/favorites", favoritesRouter);

/* ************************************************************************* */

module.exports = router;
