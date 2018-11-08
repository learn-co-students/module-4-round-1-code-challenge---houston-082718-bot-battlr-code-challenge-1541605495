import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class App extends Component {
  state = {
    bots: [],
    enlistedBots: [],
    clickedBot: null
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(bots => {this.setState({ bots })
    })
  }

  clickHandler = (bot, b) => {
    if (b) {
      this.removeBot(bot, b)
    } else {
      this.setState({
        clickedBot: bot
      })
    }
  }

  goBack = () => {
    this.setState({
      clickedBot: null
    })
  }

  addBot = (bot) => {
    let enlisted = this.state.enlistedBots;

    if (!enlisted.includes(bot)) {
      this.setState({
        enlistedBots: [...enlisted, bot]
      });
    }
  }

  removeBot = (bot, b) => {
    let enlisted = this.state.enlistedBots;
    const botIndex = this.state.enlistedBots.indexOf(bot);

    if (b) {
      enlisted.splice(botIndex, 1);
      this.setState({
        enlistedBots: enlisted
      })
    }
  }

  render() {
    return (
      <div className="App">
        <BotsPage
          bots={this.state.bots}
          clickedBot={this.state.clickedBot}
          enlistedBots={this.state.enlistedBots}
          clickHandler={this.clickHandler}
          addBot={this.addBot}
          goBack={this.goBack}
           />
      </div>
    );
  }
}

export default App;
