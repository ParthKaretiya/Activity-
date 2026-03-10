import React, { useState } from 'react'
import './Counter.css'


function Counter() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }

  function sub() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  function reset() {
    setCount(0)
  }

 return (
  <div className="counter">
    <h1>Count is : {count}</h1>
    <button className='in' onClick={add}>Increase</button>
    <button className = 'dec' onClick={sub}>Decrease</button>
    <button onClick={reset}>Reset</button>
  </div>
)

}

export default Counter
