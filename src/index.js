import { getApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import "./firebase/config"
import FirestoreApp from "./firebase/config"
import {db} from "./firebase/config"
import App from "./routes/App"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
