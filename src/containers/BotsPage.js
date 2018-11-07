import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: [],
      army: []
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(bots => this.setState({bots}))
  }

  handleClick = (clickedBot, container) => {
    if (container === "BotCollection") {
      const foundBot = this.state.army.filter(bot => {
        return bot.id === clickedBot.id
      })

      if (foundBot.length === 0) {
        this.setState({army: [...this.state.army, clickedBot]})
      }
      
    }
    else {
      const newArmy = this.state.army.filter(bot => {
        return bot.id !== clickedBot.id
      })

      this.setState({army: newArmy})
    }
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy army={this.state.army} handleClick={this.handleClick} />
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
