import React, { useState, useMemo, useEffect } from "react";

function ExpensiveCalculation(num: number) {
  console.log("Calculating...");
  // Simulate heavy computation
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result + num;
}

export default function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(5);

  // 🧠 Memoize the result
  const computedValue = useMemo(() => ExpensiveCalculation(value), [value]);

// Its too expensive to comput this way as it will also run on every render and the re-render will be cause by 
// change in count state also
//   let computedValue = ExpensiveCalculation(value);
//   useEffect(() => {
//     computedValue = ExpensiveCalculation(value);
//   }, [value]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧠 Memoization Example with useMemo</h2>

      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setValue(value + 1)}>Change Value</button>

      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
}
