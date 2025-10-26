import React, { useEffect, useRef, useState } from "react";

export default function PersistValueUseRef() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    // Increment ref on every render
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Example (Persisting Value)</h2>
      <p>Clicked: {count} times</p>
      <p>Component rendered: {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
