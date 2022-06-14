import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Our first test</h1>
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
