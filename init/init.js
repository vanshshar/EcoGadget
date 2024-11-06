const Product = require("../models/Product");

const url = 'https://fakestoreapi.com/products/category/electronics?limit=20';

const mongoose = require("mongoose");
let dbUrl = "mongodb://localhost:27017/tech_nexus";

let connectDb = async() => {
    await mongoose.connect(dbUrl);
}

connectDb().then(() => console.log("Database connected")).catch((e) => {console.log(e)});

let fetchProducts = async() => {
    await Product.deleteMany({ });

    let res = await fetch(url);
    res = await res.json();

    for(let i = 0; i < res.length; i++) {
        let product = res[i];

        product = new Product(product);

        await product.save();
    }

    console.log("Products saved");
}

fetchProducts().then(() => {
    console.log("Data Feeded");
}).catch((e) => {
    console.error("Error while data feeding",e);
});