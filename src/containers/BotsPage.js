import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    allBots: [],
    botArmy: [],
    selectedBot: ''
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

  botClickHandler = (bot) => {
    this.setState({
      selectedBot: bot
    })
  }

  goBackHandler = () => {
    this.setState({
      selectedBot: ''
    })
  }

  addToArmyHandler = (bot) => {
    !this.state.botArmy.includes(bot) ?
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      }) :
      null;
    this.setState({
      selectedBot: ''
    })
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
        {this.state.selectedBot === '' ?
          <BotCollection allBots={this.state.allBots} botClickHandler={this.botClickHandler} /> :
          <BotSpecs bot={this.state.selectedBot} addToArmyHandler={this.addToArmyHandler} goBackHandler={this.goBackHandler} />
        }
      </div>
    );
  }

}

export default BotsPage;
