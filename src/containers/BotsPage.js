import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r => r.json())
      .then(r => this.setState({ bots: r }));
  }

  handleClick = bot => {
    if (this.state.army.includes(bot)) {
      const newArr = this.state.army.filter(armyBot => {
        return armyBot.id !== bot.id;
      });
      this.setState({ army: newArr });
    } else {
      this.setState({
        army: [...this.state.army, bot]
      });
    }
  };

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army} handleClick={this.handleClick} />
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default BotsPage;
