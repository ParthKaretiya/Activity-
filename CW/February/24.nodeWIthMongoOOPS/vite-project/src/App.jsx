import { Routes, Route, Link } from "react-router-dom";
import Ji from "./components/Ji";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Name() {
  return <h1>Hello Parth Karetiya</h1>;
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Name">Name</Link>
        <Link to="/Ji">Counter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Name" element={<Name />} />
        <Route path="/Ji" element={<Ji />} />
      </Routes>
    </>
  );
}

export default App;