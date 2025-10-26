import React, { useState, useEffect, useRef } from "react";

// explaination for the below code.
// Initially count and prevCount are both 0. so when the component renders for the first time, both display as 0.
// Now when Increment is clicked count is updated to 1. Which trigger the reRender of the Component.
// So in the second reRender the count is 1, but PrevCount.current is still 0.
// Now after the reRender is completed the useEffect runs and updates prevCount.current to the current count value which is 1.
// So when Increment is clicked again count is updated to 2 and trigger reRender.
// In this third render the count is 2 but prevCount.current is 1.
// This process continues and thus we are able to track the previous value of count using useRef.

export default function PreviousValueUseRef() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count; // store previous count after each render
  }, [count]);


  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Example (Previous Value)</h2>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
