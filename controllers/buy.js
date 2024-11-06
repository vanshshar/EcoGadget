const Product = require("../models/Product");
const Delivery = require("../models/Delivery");

let mapToken = "pk.eyJ1IjoicHVuaXQ5NDY0IiwiYSI6ImNseG14N2d5ZjBhYngycXBsNjgzNjg0aTAifQ.5vOscn2dEI-BHmchYaVQEQ";

let mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports = {
    renderBuyForm: async (req,res, next) => {
        let { productId } = req.params;

        let user = req.user;
        let product = await Product.findOne({ id: productId }).populate("author");
        if(!product) {
            req.flash("error", "Product Not Found");
            return res.redirect("/products");
        }
        if(!user) {
            next(new Error("User is not there"));
        } else {
            return res.render("buy", { product: product });
        }
    },
    submitBuyForm: async(req, res, next) => {
        let { productId } = req.params;

        let product = await Product.findOne({ id: productId }).populate("author");
        if(!product) {
            req.flash("error", "Product Not Found");
            return res.redirect("/products");
        }

        // let match = await geocodingClient.forwardGeocode({
        //     query: req.body.city + ", " + req.body.state + ", " + req.body.country,
        //     limit: 1
        // });

        // console.log(match);

        let delivery = new Delivery({
            paymentMethod: req.body.paymentMethod,
            phoneNumber: req.body.phoneNumber,
        });

        delivery.buyer = req.user;
        // delivery.geometry = match.body.features[0].geometry;

        await delivery.save();

        req.flash("success", "Your Delivery has been Initiated. You may manage your Orders in Management section.");

        return res.redirect("/home");
    }
}