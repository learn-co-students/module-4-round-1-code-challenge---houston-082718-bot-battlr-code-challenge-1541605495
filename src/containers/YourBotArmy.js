import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  state = {
    added: true
  }
  //your bot army code here...

  render() {
    console.log(this.props.myGreatArmy)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.myGreatArmy.map(bot => {
              return <BotCard added={this.state.added} myGreatArmy={this.props.myGreatArmyF} bot={bot} key={bot.id * (Math.floor(Math.random() * 1000000))} />
            }
            )}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
