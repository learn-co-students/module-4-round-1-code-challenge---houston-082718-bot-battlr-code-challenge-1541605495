import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  async componentDidMount() {
    this.setState({bots: [], recruitedBots: {}, displayedBot: null})
    const botsJson = await fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    this.setState({bots: await botsJson.json()})
  }

  render() {
    if (this.state && this.state.bots) {
      return (
        <div>
          <YourBotArmy bots={this.state.bots} recruitedBots={this.state.recruitedBots} dismissBot={this.dismissBot}></YourBotArmy>
          {this.state.displayedBot === null
                                      ? <BotCollection bots={this.state.bots}
                                                       recruitedBots={this.state.recruitedBots}
                                                       onClick={this.examineBot}/>
                                      : <BotSpecs bot={this.state.bots.find(bot => bot.id === this.state.displayedBot)}
                                                  goBack={this.cancelExamine}
                                                  enlist={this.recruitBot}/>}
        </div>
      );
    } else {
      return <h1>Loading bots data...</h1>
    }
  }

  examineBot = (botId) => {
    this.setState({displayedBot: botId})
  }

  cancelExamine = () => {
    this.setState({displayedBot: null})
  }

  recruitBot = (botId) => {
    const newRecruitedBots = {...this.state.recruitedBots}
    newRecruitedBots[botId] = true
    this.setState({recruitedBots: newRecruitedBots, displayedBot: null})
  }

  dismissBot = (botId) => {
    const newRecruitedBots = {...this.state.recruitedBots}
    delete newRecruitedBots[botId]
    this.setState({recruitedBots: newRecruitedBots})
  }
}

export default BotsPage;
