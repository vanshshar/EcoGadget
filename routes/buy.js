const buyRouter = require("express").Router();
const { renderBuyForm,submitBuyForm } = require("../controllers/buy");

buyRouter.route("/:productId")
.get(renderBuyForm)
.post(submitBuyForm)

module.exports = buyRouter;