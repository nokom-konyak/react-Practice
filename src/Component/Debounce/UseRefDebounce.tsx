import React, { useRef, useState } from "react";

export default function DebounceWithRef() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const debounceRef = useRef<any>(null);
    
  const handleChange = (e: any) => {
    const value = e.target.value;
    setText(value);

    // Clear previous timer
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // Set new timer
    debounceRef.current = setTimeout(() => {
      setOutput(value);
      console.log("Updated:", value);
    }, 500);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Debounce with useRef Example</h2>
      <input
        type="text"
        value={text}
        placeholder="Start typing..."
        onChange={handleChange}
      />
      <p>Debounced Output: {output}</p>
    </div>
  );
}
