import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

export default function ConsumeCounterSlice() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧮 Redux Toolkit Counter Example</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
