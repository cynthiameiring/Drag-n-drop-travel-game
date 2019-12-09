import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import "./App.css";
import Squares from "./components/Squares";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DndProvider backend={Backend}>
          <main>Hello world!</main>
          <Squares />
        </DndProvider>
      </Provider>
    );
  }
}

export default App;
