import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    const { yourArmyList } = this.props;
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {yourArmyList.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                onClickBot={this.props.onClickBot}
              />
            ))}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
