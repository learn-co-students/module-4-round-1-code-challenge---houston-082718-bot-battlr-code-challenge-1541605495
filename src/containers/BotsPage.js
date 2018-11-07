import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    bot: {},
    toggle: false
	}

	componentWillMount() {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
		.then(r => r.json())
		.then(bots => this.setState({ bots }))
  }

  handleClick = (bot) => {
    this.setState({ bot,
    toggle: !this.state.toggle })
  }

  handleRemoveClick = (bot) => {
    this.setState({
      army: [...this.state.army].filter(b => b.id !== bot.id)
    })
  }

  handleEnlist = (bot) => {
    if ([...this.state.army].find(b => b.id === bot.id) === undefined) {
      this.setState({
        army: [...this.state.army, bot]
      })
      this.handleClick()
    } else {
      alert('You already have this bot in your army!')
    } 
  }

  render() {
    const { bots, army, bot, toggle } = this.state
    let botCollection
    let botSpecs
    toggle ? botCollection = null : botCollection = <BotCollection bots={bots} handleClick={this.handleClick} />
    toggle ? botSpecs = <BotSpecs bot={bot} handleEnlist={this.handleEnlist} handleGoBack={this.handleClick} /> : botSpecs = null
    return (
      <div>
        <YourBotArmy army={army} handleClick={this.handleRemoveClick} />
        {botSpecs}
        {botCollection}
      </div>
    );
  }

}

export default BotsPage;
