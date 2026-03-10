import React, { useRef } from "react";

function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  const handleClear = () => {
    // Check if already empty
    if (inputRef1.current.value === "") {
      alert("Input is already empty!");
      inputRef1.current.focus();
      return;
    }

    // Clear input1
    inputRef1.current.value = "";

    // Change border color to green
    inputRef1.current.style.border = "2px solid green";

    // Focus second input
    inputRef2.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef1}
        placeholder="First Input"
        style={{ marginRight: "10px" }}
      />

      <input
        ref={inputRef2}
        placeholder="Second Input"
      />

      <br /><br />

      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
