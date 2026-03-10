import React, { useState } from 'react'

function Ji() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Ji