const loginRouter = require("express").Router();
const passport = require("passport");
const { renderLogin, loginUser } = require("../controllers/login");
const { saveRedirectUrl } = require("../middleware");

loginRouter.route("/")
.get(renderLogin)
.post(saveRedirectUrl, passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/login'
}), loginUser);

module.exports = loginRouter;