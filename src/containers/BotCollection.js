import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	render() {
		return (
			<div className="ui four column grid">
				<div className="row">
					{this.props.allBots.map((bot) => {
						return <BotCard key={bot.id} bot={bot} botClickHandler={this.props.botClickHandler} />
					})}
				</div>
			</div>
		);
	}

};

export default BotCollection;
