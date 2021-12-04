import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./Footer";
import Navigation from "./Navigation";
import MyStats from "./MyStats";
import Login from "./Login";
import SignUp from "./SignUp";
import HeroImage from "./HeroImage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// store
//action -> what you want to do
//reducer -> changes store
//dispatch -> send action
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <HeroImage></HeroImage>
        <Navigation></Navigation>
        <Routes>
          <Route path="/mystats" exact element={<MyStats />} />
          <Route path="/" element={<App />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
