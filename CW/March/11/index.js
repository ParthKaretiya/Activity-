const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())

const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/cgDB")
    .then(()=>{
        console.log("MongoDB connected successfully");
    })
    .catch((err) =>{
        console.log("Database connection error : ",err);
    })

const productSchema = new mongoose.Schema({
    title : {
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    }

})

const Product = mongoose.model("Product",productSchema)



app.post("/product",async (req,res) =>{
    const {title,price,category,brand} = req.body

    const userProduct = {
        title,price,category,brand
    }
    try{
        console.log(req.query)
        const myProduct = new Product (userProduct)
        await myProduct.save();
        res.json(myProduct)

    } catch (error) {
        res.status(401).send(error)
    }
})

app.listen(PORT,(req,res)=>{
    console.log("Connected to port",PORT);
})

app.get("/products",async(req,res)=>{
    try{
        const category = req.query.category
        const products = await Product.find({category:category})
        if(!products){
            return res.status(404).send("This category is not found")
        }
        res.json(products)
    }
    catch(error){
        res.status(404).send(error)
    }
})