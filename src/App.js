import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main>Hello world!</main>
      </Provider>
    );
  }
}

export default App;
