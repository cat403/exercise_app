import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./Footer";
import Navigation from "./Navigation";
import MyStats from "./MyStats";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route path="/mystats" elelement={<MyStats />} />
        <Route path="/" element={<App />} />
      </Routes>
      <Footer></Footer>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
