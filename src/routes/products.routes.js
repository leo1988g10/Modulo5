const express = require("express");
const routes = express.Router();
const productsController = require("../controllers/productsController.js");

routes.get("/", productsController.getAll);
routes.get("/:id", productsController.getOneBy);


module.exports = routes;