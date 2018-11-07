import React from "react";
import BotsCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";
import BotSpecs from "../components/BotSpecs";
const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    bot: false,
    potentialBot: {}
  };

  componentDidMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(bots => {
        let enlistedBots = bots.map(bot => {
          bot.enlisted = false;
          return bot;
        });
        this.setState({ bots: enlistedBots, potentialBot: enlistedBots[0] });
      });
  }

  examineStats = potentialBot => {
    this.setState(state => {
      let examineBot = state.bot;
      let pBot = state.potentialBot;
      if (state.bot) {
        examineBot = false;
        pBot = [];
      } else {
        examineBot = true;
        pBot = potentialBot;
      }
      return { bot: examineBot, potentialBot: pBot };
    });
  };

  changeEnlist = enlistedBot => {
    this.setState(state => {
      let foundBot = state.bots.find(bot => bot.id === enlistedBot.id);

      foundBot.enlisted
        ? (foundBot.enlisted = false)
        : (foundBot.enlisted = true);

      return { bots: state.bots, bot: false, potentialBot: {} };
    });
  };

  render() {
    const { bots, potentialBot } = this.state;

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={bots} changeEnlist={this.changeEnlist} />
        {this.state.bot ? (
          <BotSpecs
            bot={potentialBot}
            examineStats={this.examineStats}
            changeEnlist={this.changeEnlist}
          />
        ) : (
          <BotsCollection
            bots={bots}
            examineStats={this.examineStats}
            changeEnlist={this.changeEnlist}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
