import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null); // store API data
  const [loading, setLoading] = useState(false); // show loading
  const [error, setError] = useState(null); // handle errors

  // Async function to fetch data
  const fetchData = async () => {
    setLoading(true);   // start loading
    setError(null);     // reset error
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const json = await response.json(); // wait for JSON
      setData(json); // save data in state
    } catch (err) {
      setError("Failed to fetch data"); // handle error
    } finally {
      setLoading(false); // stop loading
    }
  };

  // Run fetch once component mounts
  useEffect(() => {
    fetchData();
  }, []); // empty array = run only once

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Level 1 Async/Await</h1>

      {loading && <p>Loading...</p>}      {/* show while waiting */}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* show error */}

      {data && (                          /* show data when loaded */
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? "Yes" : "No"}</p>
        </div>
      )}

      <button onClick={fetchData} style={{ marginTop: "10px" }}>
        Fetch Again
      </button>
    </div>
  );
}

export default App;
