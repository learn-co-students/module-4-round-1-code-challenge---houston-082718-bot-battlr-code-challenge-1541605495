import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
  render(){
		const { bots, handleClick } = this.props
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots.map(bot => {
						return <BotCard key={bot.id} bot={bot} handleClick={handleClick} />
						})
					}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
