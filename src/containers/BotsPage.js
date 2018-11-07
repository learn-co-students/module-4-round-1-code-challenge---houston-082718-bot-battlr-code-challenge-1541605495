import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
	}

	componentWillMount() {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
		.then(r => r.json())
		.then(bots => this.setState({ bots }))
  }
  
  handleClick = (bot) => {
    if ([...this.state.army].find(b => b.id === bot.id) === undefined) {
      this.setState({
        army: [...this.state.army, bot]
      })
    } else {
      alert('You already have this bot in your army!')
    } 
  }

  handleRemoveClick = (bot) => {
    this.setState({
      army: [...this.state.army].filter(b => b.id !== bot.id)
    })
  }

  render() {
    const { bots, army } = this.state
    return (
      <div>
        <YourBotArmy army={army} handleClick={this.handleRemoveClick} />
        <BotCollection bots={bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
