const express = require("express");

const app = express();
app.use(express.json());

const data = [
{
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
"rating": {
"rate": 3.9,
"count": 120
}
},
{
"id": 2,
"title": "Mens Casual Premium Slim Fit T-Shirts ",
"price": 22.3,
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
"rating": {
"rate": 4.1,
"count": 259
}
},
{
"id": 3,
"title": "Cotton Jacket",
"price": 55.99,
"category": "women’s clothing",
"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
"rating": {
"rate": 4.7,
"count": 500
}
}]



app.get("/", (req, res) => {
  res.send(data);
});




app.get("/category/:category", (req, res) => {
  const category = req.params.category;
  const products = data.filter(item => item.category === category);
  res.status(200).json(products);
});


app.post("/product", (req, res) => {
  const newProduct = req.body;
  data.push(newProduct);
  res.status(201).json(newProduct);
});


app.put("/product", (req, res) => {
  const newProduct = req.body;
  data.push(newProduct);
  res.status(201).json(newProduct);
});




app.listen(3000, () => {
  console.log("Server started on port 3000");
});