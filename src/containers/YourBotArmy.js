import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  render(){
    const bots = []
    for (const botId in this.props.recruitedBots) {
      bots.push(<BotCard key={botId}
                         bot={this.props.bots.find(bot => bot.id === parseInt(botId))}
                         onClick={this.props.dismissBot} />)
    }

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
