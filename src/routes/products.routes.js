const express = require("express");
const routes = express.Router();
const productsController = require("../controllers/productsController.js");

routes.get("/", productsController.getAll);
routes.get("/", productsController.getOneBy);

module.exports = routes;