import React, { useState } from 'react';

function App() {
  const [fruits, setFruits] = useState({
    Apple: 1,
    Banana: 2,
    Grapes: 3
  });

  function removeFruit(value) {
    const updatedFruits = Object.fromEntries(
      Object.entries(fruits).filter(
        ([item]) => item !== value
      )
    );

    setFruits(updatedFruits);
  }

  return (
    <>
      {Object.entries(fruits).map(([item, value], index) => (
        <div key={index}>
          <p>fruit name: {item}</p>
          <p>fruit value: {value}</p>
          <button onClick={() => removeFruit(item)}>
            Click Me
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
