import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
	//your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  {/* Collection of all bots */}
					{
						this.props.botSpecs
						? <BotSpecs bot={this.props.bot} handleClickBack={this.props.handleClickBack} handleClickEnlist={this.props.handleClickEnlist} />
						:
						this.props.bots.map(bot => {
							return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick} container="BotCollection" />
						})
					}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
