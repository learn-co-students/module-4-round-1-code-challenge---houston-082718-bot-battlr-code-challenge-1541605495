import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    myGreateArmy: []
  }

  myGreateArmy = (obj) => {
    if (!this.state.myGreateArmy.includes(obj)) {
      this.setState({
        myGreateArmy: [...this.state.myGreateArmy, obj]
      })
    } else if (this.state.myGreateArmy.includes(obj)) {
      let index = this.state.myGreateArmy.indexOf(obj)
      let tmp = this.state.myGreateArmy
      tmp.splice(index, 1)
      this.setState({
        myGreateArmy: tmp
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy myGreateArmyF={this.myGreateArmy} myGreateArmy={this.state.myGreateArmy} />
        {this.props.allBots.map(bot => {
          return <BotCollection myGreateArmy={this.myGreateArmy} key={bot.id} bot={bot} />
        })}
      </div>
    );
  }

}

export default BotsPage;
