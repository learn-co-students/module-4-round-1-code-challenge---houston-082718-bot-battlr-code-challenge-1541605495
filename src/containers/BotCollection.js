import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    const { bots, examineStats, changeEnlist } = this.props;
    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
          {bots.map(bot => {
            if (!bot.enlisted) {
              return (
                <BotCard
                  key={bot.id}
                  bot={bot}
                  examineStats={examineStats}
                  changeEnlist={changeEnlist}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
