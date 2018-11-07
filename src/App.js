import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class App extends Component {
  state = {
    bots: []
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(bots => this.setState({ bots }))
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} />
      </div>
    );
  }
}

export default App;
