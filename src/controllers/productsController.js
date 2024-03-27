const productos = require("../models/products.js");
const path = require("path");

const productsController = {
    getAll: (req, res) => res.render("index", {products: productos.getAll()}),
    getOneBy: (req, res) => res.render("detalleMenu", {product: productos.getOneBy(req.params.id)}),
}

module.exports = productsController;