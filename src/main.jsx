// Fichero src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

import { HashRouter, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
