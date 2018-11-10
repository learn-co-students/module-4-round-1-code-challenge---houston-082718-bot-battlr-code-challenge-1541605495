import React from "react"
import BotCard from "../components/BotCard"

class BotCollection extends React.Component {

    render() {
        const { bots, handleProfile } = this.props
        return (
            <div className="ui four column grid">
                {this.props.bots.map(bot=> {
                    return <BotCard key={bot.id} bot={bot} handleProfile={handleProfile} />
                })}
            </div>
        )
    }
}

export default BotCollection
