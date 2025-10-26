// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 🔹 Define some simple components
function Home() {
  return <h2>🏠 Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Page</h2>;
}

function Contact() {
  return <h2>📞 Contact Page</h2>;
}

// 🔹 Main App Component
export default function ReactRouterExample() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>React Router Example</h1>

        {/* 🔸 Navigation Links */}
        <nav style={{ marginBottom: "1rem" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
        </nav>

        {/* 🔸 Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
