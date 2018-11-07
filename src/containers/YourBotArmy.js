import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {/* Your Bot Army */}
            {
              this.props.army.map(bot => {
                return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} container="YourBotArmy" />
              })
            }
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
