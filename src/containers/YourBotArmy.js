import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    const { bots, changeEnlist, examineStats } = this.props;

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {bots.filter(bot => bot.enlisted).map(bot => {
              return (
                <BotCard
                  key={bot.id}
                  bot={bot}
                  changeEnlist={changeEnlist}
                  examineStats={examineStats}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
