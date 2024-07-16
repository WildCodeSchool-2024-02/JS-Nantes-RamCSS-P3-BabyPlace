const express = require("express");

const router = express.Router();

const nurseriesRouter = require("./nurseries/router");

router.use("/nurseries", nurseriesRouter);

const childrenRouter = require("./children/router");

router.use("/children", childrenRouter);

const parentsRouter = require("./parents/router");

router.use("/parents", parentsRouter);

const reservationsRouter = require("./reservations/router");

router.use("/reservations", reservationsRouter);

const favoritesRouter = require("./favorites/router");

router.use("/favorites", favoritesRouter);

const { login } = require("../../controllers/parentActions");

router.use("/login", login);

/* ************************************************************************* */

module.exports = router;
