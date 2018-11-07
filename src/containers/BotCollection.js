import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	state = {
		added: false
	}
	//your code here

	render() {
		return (
			<div className="ui four column grid">
				<div className="row">
					<BotCard added={this.state.added} myGreatArmy={this.props.myGreatArmy} bot={this.props.bot} />
				</div>
			</div>
		);
	}

};

export default BotCollection;
