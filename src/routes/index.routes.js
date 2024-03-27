const express = require("express");
const routes = express.Router();
const path = require("path");

const productsRoutes = require("./products.routes.js");

routes.use("/", productsRoutes);

module.exports = routes;