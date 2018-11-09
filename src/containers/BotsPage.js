import React from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
    state = {
        bots: [],
        army: []
    }

    componentDidMount() {
        fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
        .then(r=> r.json())
        .then(r=> this.setState({ bots: r }))
    }

    handleEnlist = (bot) => {
        this.state.army.includes(bot) ? bot : this.setState({ army: [...this.state.army, bot] })
    }

    handleRemove = (bot) => {
        const { army } = this.state
        const removeBot = army.find(b => b === bot)
        const index  = army.indexOf(removeBot)
        army.splice(index, 1)
        const newArmy = army
        this.setState({ army: newArmy })

    }

    render() {
        return (
            <div>
                <YourBotArmy army={this.state.army} handleRemove={this.handleRemove} />
                <BotCollection bots={this.state.bots} handleEnlist={this.handleEnlist}/>
            </div>
        )
    }
}

export default BotsPage
