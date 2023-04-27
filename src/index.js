import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ClietesProvider } from "./components/context/client.context";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClietesProvider>
        <App />
      </ClietesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
