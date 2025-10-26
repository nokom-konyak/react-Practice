import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Todo App (useReducer Example)</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}