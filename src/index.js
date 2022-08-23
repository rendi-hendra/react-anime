import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Coba from "./Coba";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const coba = ReactDOM.createRoot(document.getElementById("coba"));
coba.render(
  <React.StrictMode>
    <BrowserRouter>
      <Coba />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
