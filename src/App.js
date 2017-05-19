import React, { Component } from "react";
import "./App.css";
import Data from "./containers/dataContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Earthquake Dashboard</h2>
        </div>
        <Data />
      </div>
    );
  }
}

export default App;
