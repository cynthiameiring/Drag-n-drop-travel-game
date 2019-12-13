import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
// import { Route } from "react-router-dom";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import GameContainer from "./components/GameContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DndProvider backend={Backend}>
          <GameContainer />
        </DndProvider>
      </Provider>
    );
  }
}

export default App;
