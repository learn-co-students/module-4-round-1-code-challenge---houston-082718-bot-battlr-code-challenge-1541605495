import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import Filter from "../components/Filter";

const api = "https://bot-battler-api.herokuapp.com/api/v1/bots";
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    botsList: [],
    yourArmyList: [],
    showBotSpecs: false,
    selectedBot: {}
  };
  componentDidMount() {
    fetch(api)
      .then(resp => resp.json())
      .then(
        data => this.setState({ botsList: data }),
        console.log("Success fetch")
      );
  }

  onClickAddBot = bot => {
    !this.state.yourArmyList.includes(bot) &&
      this.setState({ yourArmyList: [...this.state.yourArmyList, bot] }, () =>
        console.log("armyList", this.state.yourArmyList)
      );
  };

  onClickRemoveBot = bot => {
    console.log("AddArmyBotFired", bot);
    const newArmyList = [...this.state.yourArmyList].filter(
      armyBot => armyBot.id !== bot.id
    );
    this.setState({ yourArmyList: newArmyList }, () =>
      console.log("newList", this.state.yourArmyList)
    );
  };

  onClickBotShowSpecs = bot => {
    this.setState({ ...this.state, showBotSpecs: true, selectedBot: bot }, () =>
      console.log("selected bot", this.state.selectedBot)
    );
  };

  onClickGoBack = () => {
    console.log("GoBackFired");
    this.setState({ ...this.state, showBotSpecs: false }, () =>
      console.log("GoBack", this.state.showBotSpecs)
    );
  };

  render() {
    return (
      <div>
        <Filter />
        <YourBotArmy
          yourArmyList={this.state.yourArmyList}
          onClickBot={this.onClickRemoveBot}
        />
        {this.state.showBotSpecs ? (
          <BotSpecs
            bot={this.state.selectedBot}
            onClickGoBack={this.onClickGoBack}
            onClickBot={this.onClickAddBot}
          />
        ) : (
          <BotCollection
            botsList={this.state.botsList}
            onClickBot={this.onClickBotShowSpecs}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
