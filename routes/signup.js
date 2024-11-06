const { renderSignup, signupUser } = require("../controllers/signup");

const signupRouter = require("express").Router();

signupRouter.route("/")
.get(renderSignup)
.post(signupUser);

module.exports = signupRouter;