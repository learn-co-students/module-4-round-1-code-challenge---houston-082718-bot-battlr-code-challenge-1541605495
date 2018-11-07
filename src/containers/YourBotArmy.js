import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  // toggleEnlistBot = botObj => {
  //   if (this.state.yourArmy.includes(botObj)) {
  //     this.state.yourArmy.filter(robot => {
  //       robot.id !== botObj.id;
  //     });
  //   }
  // };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.yourArmy.map((bot, idx) => {
              return (
                <BotCard
                  bot={bot}
                  key={idx}
                  toggleEnlistBot={this.props.toggleEnlistBot}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
