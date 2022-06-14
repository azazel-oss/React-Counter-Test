import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Simple Counter</h1>
      <p data-testid="counter-value">{counter}</p>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
