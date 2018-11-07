import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          <h1>Collection of all bots</h1>
          {this.props.bots.map(bot => {
            return (
              <BotCard
                key={bot.id}
                bot={bot}
                handleClick={() => this.props.handleClick(bot)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
