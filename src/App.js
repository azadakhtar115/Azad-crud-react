import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <div className="App">
          <Navbar />
        </div>
      </Provider>
    </div>
  );
}
