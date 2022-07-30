import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function imcrement() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2> {counter}</h2>
      <button type="button" onClick={imcrement}>
        Imcrement
      </button>
    </div>
  );
}
