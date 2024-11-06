module.exports.isLoggedIn = async(req,res,next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged In");
        return res.redirect("/login");
    } else {
        next();
    }
}

module.exports.saveRedirectUrl = async (req,res,next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isSubscribed = async(req,res,next) => {
    
}