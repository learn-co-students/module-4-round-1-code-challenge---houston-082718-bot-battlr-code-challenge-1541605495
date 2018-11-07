import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
          yourArmy={this.props.yourArmy}
          toggleEnlistBot={this.props.toggleEnlistBot}
          discharge={this.props.discharge}
        />
        <BotCollection
          bots={this.props.bots}
          toggleEnlistBot={this.props.toggleEnlistBot}
        />
      </div>
    );
  }
}

export default BotsPage;
