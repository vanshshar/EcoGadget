const Product = require("../models/Product")

module.exports = {
    showProducts : async(req,res,next) => {
        let data = await Product.find();
        
        return res.render("products", { products: data });
    }
}