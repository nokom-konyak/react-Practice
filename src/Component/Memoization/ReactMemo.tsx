import React, { useState, memo } from "react";

interface IChildProps {
    name: string;
}

const Child = memo(({ name }: IChildProps) => {
  console.log("Child component rendered!");
  return <h3>Child: {name}</h3>;
});

export default function MemoExampleParent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo Example</h2>
      <Child name={name} />

      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>

      <button onClick={() => setName(name === "John" ? "Jane" : "John")}>
        Change Name
      </button>
    </div>
  );
}
