import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  async componentDidMount() {
    this.setState({bots: [], recruitedBots: {}})
    const botsJson = await fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    this.setState({bots: await botsJson.json()})
  }

  render() {
    if (this.state && this.state.bots) {
      return (
        <div>
          <YourBotArmy bots={this.state.bots} recruitedBots={this.state.recruitedBots} dismissBot={this.dismissBot}></YourBotArmy>
          <BotCollection bots={this.state.bots} recruitBot={this.recruitBot}></BotCollection>
        </div>
      );
    } else {
      return <h1>Loading bots data...</h1>
    }
  }

  recruitBot = (botId) => {
    const newRecruitedBots = {...this.state.recruitedBots}
    newRecruitedBots[botId] = true
    this.setState({recruitedBots: newRecruitedBots})
  }

  dismissBot = (botId) => {
    const newRecruitedBots = {...this.state.recruitedBots}
    delete newRecruitedBots[botId]
    this.setState({recruitedBots: newRecruitedBots})
  }
}

export default BotsPage;
