import React, {Fragment} from "react";
import BotCard from "../components/BotCard"

class YourBotArmy extends React.Component {



    render() {
        const { bots, handleRemove } = this.props
        return (
            <div className="ui segment inverted olive bot-army">
                <div className="ui five column grid">
                    <div className="row bot-army-row">
                        {
                            Object.values(bots).map(botObj => {
                                return (Object.values(botObj).map(bot => {
                                    return (
                                        <Fragment key={bot.id}>
                                        <BotCard  bot={bot} /><br/>
                                        <button id={bot.id} onClick={handleRemove}>Remove {bot.name}</button>
                                        </Fragment>
                                    )
                                }))
                            })
                        }
                    </div>
                </div >
            </div>
        )
    }
}

export default YourBotArmy;
