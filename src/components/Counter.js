import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="App">
        <button>
          <span onClick={() => setCounter(counter + 1)}>+</span>
        </button>
        {counter}
        <button>
          <span onClick={() => setCounter(counter - 1)}>-</span>
        </button>
      </div>
    </div>
  );
}
