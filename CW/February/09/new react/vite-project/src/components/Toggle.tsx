import React, { useState } from 'react';

function Toggle() {
  const [show, setShow] = useState(true);

  function click() {
    setShow(!show); 
  }

  return (
    <div>
      <button onClick={click}>Click Me</button>

      {show ? <p>Hello I am visible</p> : <p>Hidden </p>}
    </div>
  );
}

export default Toggle;
