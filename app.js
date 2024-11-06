const express = require("express");
const path = require("path");
const PORT = 3000;
const crypto = require('crypto');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const homeRouter = require("./routes/home");
const ejsMate = require("ejs-mate");
const MongoStore = require("connect-mongo");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const User = require("./models/User");
const flash = require("connect-flash");
const session = require("express-session");
const { isLoggedIn } = require("./middleware");
const { logoutUser } = require("./controllers/login");
const productRouter = require("./routes/products");
const buyRouter = require("./routes/buy");
const sellRouter = require("./routes/sell");
const secret = crypto.randomBytes(32).toString("hex");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/tech_nexus");
    } catch(e) {
        console.log("Error while connecting to database:",e);
    }
}

connectDb().then(() => {
    console.log("Successfully Connected to Database");
}).catch((e) => {
    console.log("Error connection to the database",e);
});

const app = express();

const store = MongoStore.create({
    mongoUrl: "mongodb://localhost:27017/tech_nexus",
    crypto: {
        secret: secret
    },
    touchAfter: 24 * 3600
});

// let whitelist = ["*"];

store.on("error", (e) => {
    console.log(e);
});

app.use(session({
    store,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    },
    saveUninitialized: true,
    resave: false,
    secret: secret
}));

app.use(cors({
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"]
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve("public")));
app.use(cookieParser());
app.use(flash());
app.engine("ejs", ejsMate);
app.set("views", path.resolve("views", "pages"));
app.set("view engine", "ejs");
app.use((req,res,next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.get("/", (req, res) => {
    return res.redirect("/home");
});

app.use("/home", homeRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/logout", isLoggedIn,logoutUser);
app.use("/products", isLoggedIn, productRouter);
app.use("/buy", isLoggedIn, buyRouter);
app.use("/sell", isLoggedIn, sellRouter);

app.get("/join-revolution", (req,res) => {
    return res.render("battery");
});

app.listen(PORT, () => {
    console.log('Server is Litening to the PORT:', PORT);

    console.log("http://localhost:"+PORT);

});

