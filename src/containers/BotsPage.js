import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    armyBots: [],
    botIDs: []
  }

  addToBotArmy = (bot, clicked) => {
    let currentBots = this.state.armyBots
    let currentIDs = this.state.botIDs

    if (!currentIDs.includes(bot.id)) {
      this.setState({
        botIDs: [...currentIDs, bot.id],
        armyBots: [...currentBots, bot]
      })
    } else if (currentIDs.includes(bot.id) && clicked) {
      const botIndex = currentBots.indexOf(bot)
      const idIndex = currentIDs.indexOf(bot.id)
      currentBots.splice(botIndex, 1)
      currentIDs.splice(idIndex, 1)

      this.setState({
        botIDs: currentIDs,
        armyBots: currentBots
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.armyBots} addToBotArmy={this.addToBotArmy} />
        <BotCollection bots={this.props.bots} addToBotArmy={this.addToBotArmy} />
      </div>
    );
  }

}

export default BotsPage;
