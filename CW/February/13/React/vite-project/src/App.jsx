import { useMemo, useState } from 'react';
import './App.css';

function App() {

  const sum = () => {
    let i;
    for (i = 0; i < 10000000; i++) {
      // heavy work
    }
    return i;
  };

 const total = useMemo(() => {
  return sum();
}, []);


  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Total sum = {total}</p>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default App;
