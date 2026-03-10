import React, { useState, useEffect } from 'react';

function Api() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("asc");

  useEffect(() => {
    console.log("Fetching Products....");

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data Received.....");
        setProducts(data);
        setLoading(false);
      });

  }, []);

  // 1️⃣ Filter Products
  let processedProducts = products;

  if (category !== "All") {
    processedProducts = products.filter(
      (product) => product.category === category
    );
  }

  // 2️⃣ Sort Products (copy first to avoid mutation)
  processedProducts = [...processedProducts];

  if (price === "asc") {
    processedProducts.sort();
  } else if (price === "desc") {
    processedProducts.sort().reverse();
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>

      {/* Price Sorting Dropdown */}
      <select
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      {/* Render Products */}
      {processedProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ₹ {product.price}</p>
          <p>Description: {product.description}</p>
          <img
            src={product.image}
            alt={product.title}
            width="120"
          />
        </div>
      ))}

    </div>
  );
}

export default Api;
