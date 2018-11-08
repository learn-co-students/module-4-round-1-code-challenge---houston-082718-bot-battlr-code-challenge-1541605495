import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  state = {
    enlisted: true
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.enlistedBots.map(bot => {
              return <BotCard key={bot.name} enlisted={this.state.enlisted} clickHandler={this.props.clickHandler} bot={bot} />
            })}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
