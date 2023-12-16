import React, { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState<number>(1);

  console.log("Home");

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
