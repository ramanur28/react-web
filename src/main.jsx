import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";

// components
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);
