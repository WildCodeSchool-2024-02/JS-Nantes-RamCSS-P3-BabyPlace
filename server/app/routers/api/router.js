const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

// const itemsRouter = require("./items/router");

// router.use("/items", itemsRouter);

const nurseriesRouter = require("./nurseries/router");

router.use("/nurseries", nurseriesRouter);

/* ************************************************************************* */

module.exports = router;
