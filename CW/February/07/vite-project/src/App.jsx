import { Link, Route, Routes } from "react-router-dom";
import './App.css';

import Post from './Pages/Post';
import Product from './Pages/Product';
import User from './Pages/User';

function App() {
  return (
    <div className="card">
      
      <nav style={{ display: "flex", gap: "30px" }}>
        <Link to="/post">Post</Link>
        <Link to="/product">Product</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
      </Routes>

    </div>
  );
}

export default App;
