import React, { useState, useEffect, useCallback } from "react";

// 🔹 Debounce utility
function debounce(originalFunc: any, delay: number) {
  let timer: any;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => originalFunc(...args), delay);
  };
}

export default function FunctionCallDebounced() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  // Simulate an API call ( Function Call )
  const fetchData = async (searchTerm: string) => {
    console.log("Fetching data for:", searchTerm);
    // Simulating API delay
    setResult(`Results for "${searchTerm}"`);
  };

  // Create a debounced version of fetchData  Function Call
  const debouncedFetch = useCallback(debounce(fetchData, 500), []);

  // calling debounced function inside useEffect on query change
  useEffect(() => {
    if (query.trim() !== "") {
      debouncedFetch(query); // passing extra arguments to demonstrate ...args
    }
  }, [query, debouncedFetch]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔎 Debounced Search Example</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>{result}</p>
    </div>
  );
}
