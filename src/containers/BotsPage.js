import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const api = "https://bot-battler-api.herokuapp.com/api/v1/bots";
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    botsList: [],
    yourArmyList: []
  };
  componentDidMount() {
    fetch(api)
      .then(resp => resp.json())
      .then(
        data => this.setState({ botsList: data }),
        console.log("Success fetch")
      );
  }

  onClickBot = bot => {
    this.setState({ yourArmyList: [...this.state.yourArmyList, bot] }, () =>
      console.log("armyList", this.state.yourArmyList)
    );
  };

  onClickArmyBot = bot => {
    const newArmyList = [...this.state.yourArmyList].filter(
      armyBot => armyBot.id !== bot.id
    );
    this.setState({ yourArmyList: newArmyList }, () =>
      console.log("newList", this.state.yourArmyList)
    );
  };
  render() {
    return (
      <div>
        <YourBotArmy
          yourArmyList={this.state.yourArmyList}
          onClickBot={this.onClickArmyBot}
        />
        <BotCollection
          botsList={this.state.botsList}
          onClickBot={this.onClickBot}
        />
      </div>
    );
  }
}

export default BotsPage;
