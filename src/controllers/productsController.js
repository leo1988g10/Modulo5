const path = require("path");
const productos = require("../models/products.js");

const productsController = {
    getAll: (req, res) => res.render("index", {products: productos.getAll()}),
    getOneBy: (req, res) => res.render("detalleMenu", {product: productos.getOneBy(req.params.id)}),
}

module.exports = productsController;