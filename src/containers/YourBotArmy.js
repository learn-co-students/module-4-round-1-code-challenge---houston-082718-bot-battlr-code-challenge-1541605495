import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  state = {
    clicked: true
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(bot => {
              return <BotCard key={bot.id} clicked={this.state.clicked} bot={bot} addToBotArmy={this.props.addToBotArmy}/>
            })}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
