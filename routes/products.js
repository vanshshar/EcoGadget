const { isLoggedIn } = require("../middleware");
const { showProducts } = require("../controllers/products");
const productRouter = require("express").Router();

productRouter.route("/")
.get(isLoggedIn, showProducts);

module.exports = productRouter;