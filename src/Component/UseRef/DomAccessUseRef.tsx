import React, { useRef } from "react";

export default function DOMAccessUseRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    // Access the DOM element directly
    inputRef.current?.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>useRef Example (Accessing DOM)</h2>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
