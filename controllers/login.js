module.exports = {
    renderLogin: (req,res) => {
        return res.render("login");
    },
    loginUser: (req,res) => {
        let { email, username, password } = req.body;
        
        req.flash("success", "Welcome to EcoGadget");
        let redirectUrl = res.locals.redirectUrl || "/home";

        return res.redirect(redirectUrl);
    },
    logoutUser: (req,res,next) => {
        req.logout((err) => {
            if(err) return next(err);
            else {
                req.flash("success", "Successfully Logged Out.");
                return res.redirect("/home");
            }
        });
    }
}