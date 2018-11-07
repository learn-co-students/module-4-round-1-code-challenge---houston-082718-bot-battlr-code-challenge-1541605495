import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    console.log(this.props.myGreateArmy)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.myGreateArmy.map(bot => {
              return <BotCard myGreateArmy={this.props.myGreateArmyF} bot={bot} key={bot.id * (Math.floor(Math.random() * 1000000))} />
            }
            )}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
