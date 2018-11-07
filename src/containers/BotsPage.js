import React from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {

    state = {
        bots: [],
        botArmy: []
    }

    componentDidMount() {
        fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
        .then(r => r.json())
        .then(r => this.setState({bots: r}))
    }

    handleBotClick = (event) => {
        event.preventDefault()
        console.log(event.target)
        const { bots, botArmy } = this.state
        const id = Number(event.target.alt)
        const bot = this.state.bots.filter(bot => bot.id === id)

        if (botArmy.length === 0) {
            this.setState({ botArmy: [...this.state.botArmy, bot] })
        } else {
            Object.values(this.state.botArmy).map(botObj=> {
                Object.values(botObj).map(b=> {
                    if (b.id === id) {
                        return
                    } else {
                        this.setState({ botArmy: [...botArmy, bot] })
                    }
                })

            })
        }
    }

    handleRemove = (event) => {
        event.preventDefault()
        const id = Number(event.target.id)

        Object.values(this.state.botArmy).map((botObj, index) => {
            Object.values(botObj).map(bot=> {
                if (bot.id === id) {
                    this.state.botArmy.splice(index, 1)
                    const newArmy = this.state.botArmy
                    this.setState({ botArmy: newArmy })
                }
            })
        })
    }

    render() {
        return (<div>
            <BotCollection bots={this.state.bots} handleBotClick={this.handleBotClick}/>
            <YourBotArmy bots={this.state.botArmy} handleRemove={this.handleRemove}/>
        </div>);
    }

}

export default BotsPage;
