import React, { useState, useCallback, memo } from "react";

// 🔹 Child component (memoized)
const Child = memo(({ onIncrement }: { onIncrement: () => void }) => {
  console.log("🧒 Child rendered!");
  return (
    <div>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
});

export default function UseCallBackParent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

//   ⚠️ Without useCallback:
//   const handleIncrement = () => setCount(count + 1);

//   ✅ With useCallback:
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // no dependencies → function reference never changes

  console.log("👨 Parent rendered!");

  return (
    <div style={{ padding: "20px" }}>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Child onIncrement={handleIncrement} />
    </div>
  );
}
