import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  state = {
		enlisted: false
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => {
						return <BotCard
							key={bot.id}
							bot={bot}
							enlisted={this.state.enlisted}
							clickHandler={this.props.clickHandler}
						/>
					})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
