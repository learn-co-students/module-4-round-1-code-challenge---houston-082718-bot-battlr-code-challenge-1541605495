import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
      const { bots, handleBotClick } = this.props
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {Object.values(bots).map(bot=> {
                  return <BotCard key={bot.id} bot={bot} handleBotClick={handleBotClick}/>
              })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
