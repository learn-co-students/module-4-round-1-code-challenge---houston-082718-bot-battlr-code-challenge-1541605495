import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    bots: [],
    yourArmy: []
  };

  componentDidMount = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(bots => {
        this.setState({
          bots
        });
      });
  };

  // toggleEnlistBot = botObj => {
  //   if (this.state.yourArmy.includes(botObj)) {
  //     return null;
  //   }
  //   this.setState({
  //     yourArmy: [...this.state.yourArmy, botObj]
  //   });
  // };

  toggleEnlistBot = botObj => {
    const newArmy = this.state.yourArmy.filter(robotObj => {
      robotObj.Enlisted;
    });
    if (botObj.Enlisted) {
      !botObj.Enlisted;
      this.setState({
        yourArmy: newArmy
      });
      return null;
    }
    botObj.Enlisted = true;
    this.setState({
      yourArmy: [...this.state.yourArmy, botObj]
    });
    return null;
  };

  render() {
    return (
      <div className="App">
        <BotsPage
          bots={this.state.bots}
          toggleEnlistBot={this.toggleEnlistBot}
          yourArmy={this.state.yourArmy}
        />
      </div>
    );
  }
}

export default App;
