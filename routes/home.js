const { renderHome } = require("../controllers/home");
const homeRouter = require("express").Router();

homeRouter.route("/")
.get(renderHome);

module.exports = homeRouter;