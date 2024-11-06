const sellRouter = require("express").Router();
const { renderSellForm } = require("../controllers/sell");

sellRouter.route("/")
.get(renderSellForm);

module.exports = sellRouter;