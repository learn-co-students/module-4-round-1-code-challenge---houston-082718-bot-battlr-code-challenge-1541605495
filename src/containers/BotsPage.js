import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from  "../components/BotSpecs"
class BotsPage extends React.Component {

  render() {
    if (this.props.clickedBot) {
      return (
        <div>
          <YourBotArmy enlistedBots={this.props.enlistedBots} clickHandler={this.props.clickHandler} />
          <BotSpecs bot={this.props.clickedBot} addBot={this.props.addBot} goBack={this.props.goBack} />
        </div>
      );
    } else {
      return (
        <div>
          <YourBotArmy enlistedBots={this.props.enlistedBots} clickHandler={this.props.clickHandler} />
          <BotCollection bots={this.props.bots} clickHandler={this.props.clickHandler} />
        </div>
      );
    }
  }

}

export default BotsPage;
