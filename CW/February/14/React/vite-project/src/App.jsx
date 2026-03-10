import { useState, useEffect } from "react";
import "./App.css";


function Timer() {
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]); // ✅ added seconds

  return (
    <div className="Timer">
      <h1>{seconds} seconds</h1>

      <button  className = " inc "onClick={() => setIsRunning(true)}>Start</button>
      <button  className = " dec"onClick={() => setIsRunning(false)}>Stop</button>
      <button  className = "res "onClick={() => {
        setSeconds(60);
        setIsRunning(false);
      }}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
