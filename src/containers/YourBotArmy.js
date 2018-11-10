import React, {Fragment} from "react"
import BotCard from "../components/BotCard"

class YourBotArmy extends React.Component {
    render() {
        const { army, handleRemove } = this.props
        return (
            <div className="ui segment inverted olive bot-army">
               <div className="ui five column grid">
                   <div className="row bot-army-row">
                       {army.map(bot=> {
                           return <BotCard key={bot.id} bot={bot} handleProfile={handleRemove}/>
                       })}
                   </div>
               </div>
           </div>
        )
    }

}
export default YourBotArmy
