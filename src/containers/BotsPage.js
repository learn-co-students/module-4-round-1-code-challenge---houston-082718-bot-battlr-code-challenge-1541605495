import React from "react";
import BotsCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";
const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: []
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(bots => {
        let enlistedBots = bots.map(bot => {
          bot.enlisted = false;
          return bot;
        });
        this.setState({ bots: enlistedBots });
      });
  }

  changeEnlist = enlistedBot => {
    this.setState(state => {
      let foundBot = state.bots.find(bot => bot.id === enlistedBot.id);
      foundBot.enlisted
        ? (foundBot.enlisted = false)
        : (foundBot.enlisted = true);
      return { bots: state.bots };
    });
  };

  render() {
    const { bots } = this.state;

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={bots} changeEnlist={this.changeEnlist} />
        <BotsCollection bots={bots} changeEnlist={this.changeEnlist} />
      </div>
    );
  }
}

export default BotsPage;
