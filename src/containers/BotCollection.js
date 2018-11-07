import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    console.log(this.props);
    const { botsList } = this.props;
    return (
      <div className="ui four column grid">
        <div className="row">
          {botsList.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              onClickBot={this.props.onClickBot}
            />
          ))}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
