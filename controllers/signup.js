const User = require("../models/User");
const validateSignup = require("../validators/signup");

module.exports = {
    renderSignup: (req, res) => {
        return res.render("signup");
    },
    signupUser: async (req, res, next) => {
        try {
            let { username, email, password, confirmPassword } = req.body;
            if (password !== confirmPassword) {
                req.flash("error", "Provided Passwords doesn't Match");
                return res.redirect("/signup");
            }
            let { error, value } = validateSignup(req.body);

            if (error) {
                req.flash("error", error.message);

                return res.redirect("/signup");
            } else {
                let user = new User({
                    username, email, password
                });

                let newUser = await User.register(user, password);

                req.login(newUser, { session: true }, (err) => {
                    if(err) {
                        return next(err);
                    } else {
                        req.flash("success", "Registered Successfully");
                        return res.redirect("/home");
                    }
                })
            }
        } catch (e) {
            req.flash("error", e.message);

            return res.redirect("/signup");
        }
    }
}