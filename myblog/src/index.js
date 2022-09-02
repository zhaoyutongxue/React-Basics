import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import TestJSX from "./TestJSX";

const root = ReactDOM.createRoot(document.getElementById("root"));

// app component is being rendered to the DOM
root.render(
  <React.StrictMode>
    {/* <TestJSX /> */}
    <App />
  </React.StrictMode>
);
