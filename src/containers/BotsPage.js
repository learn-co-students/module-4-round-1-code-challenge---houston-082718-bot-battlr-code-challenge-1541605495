import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          allBots: data
        })
      })
  }

  addToArmyHandler = (bot) => {
    !this.state.botArmy.includes(bot) ?
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      }) :
      null
  }

  removeFromArmyHandler = (selectedBot) => {
    const newBots = this.state.botArmy.filter((bot) => {
      return bot !== selectedBot
    })
    this.setState({
      botArmy: newBots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeFromArmyHandler={this.removeFromArmyHandler} />
        <BotCollection allBots={this.state.allBots} addToArmyHandler={this.addToArmyHandler} />
      </div>
    );
  }

}

export default BotsPage;
