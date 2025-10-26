import React, { useReducer } from "react";
import counterReducer from "./CounterReducerUseReducer";

const initialState = { count: 0 };

// 3️⃣ Create a component using useReducer
export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>useReducer Counter Example</h2>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}