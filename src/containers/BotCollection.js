import React from "react";
import BotCard from "../components/BotCard";

export default class BotCollection extends React.Component {
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} recruited={this.props.recruitedBots[bot.id]} onClick={this.props.onClick}></BotCard>)}
    		</div>
  	  </div>
  	);
  }

};

// https://bot-battler-api.herokuapp.com/api/v1/bots