import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here

	render() {
		return (
			<div className="ui four column grid">
				<div className="row">
					<BotCard myGreateArmy={this.props.myGreateArmy} bot={this.props.bot} />
				</div>
			</div>
		);
	}

};

export default BotCollection;
