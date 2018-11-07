import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    myGreatArmy: [],
    clickedBot: {},
    showSpecs: false
  }

  myGreatArmy = (obj, t) => {
    if (!this.state.myGreatArmy.includes(obj)) {
      this.setState({
        myGreatArmy: [...this.state.myGreatArmy, obj],
        showSpecs: true
      })
    } else if (this.state.myGreatArmy.includes(obj) && t === true) {
      let index = this.state.myGreatArmy.indexOf(obj)
      let tmp = this.state.myGreatArmy
      tmp.splice(index, 1)
      this.setState({
        myGreatArmy: tmp,
        clickedBot: obj,
        showSpecs: false
      })
    }
  }

  render() {
    return (
      <div>
        {() => {
          if (this.state.showSpecs) {
            return <BotSpecs bot={this.state.clickedBot} />
          }
        }}
        <YourBotArmy myGreatArmyF={this.myGreatArmy} myGreatArmy={this.state.myGreatArmy} />
        {this.props.allBots.map(bot => {
          return <BotCollection myGreatArmy={this.myGreatArmy} key={bot.id} bot={bot} />
        })}
      </div>
    );
  }

}

export default BotsPage;
