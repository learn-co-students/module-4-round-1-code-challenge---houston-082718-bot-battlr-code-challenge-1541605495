import React from "react"
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import { Dropdown } from "semantic-ui-react"

const options = [
        {key: 'All', value: 'All', text: 'All'},
        {key: 'Defender', value: 'Defender', text: 'Defender'},
        {key: 'Assault', value: 'Assault', text: 'Assault'},
        {key: 'Support', value: 'Support', text: 'Support'}
    ]

class BotsPage extends React.Component {
    state = {
        bots: [],
        army: [],
        clicked: {boolean: false, bot: null},
        option: ''
    }

    componentDidMount() {
        fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
        .then(r=> r.json())
        .then(r=> this.setState({ bots: r }))
    }

    handleProfile = (bot) => {
        this.setState({ clicked: {boolean: !this.state.clicked.boolean, bot: bot} })
    }

    handleEnlist = (bot) => {
        console.log(bot)
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

    handleBack = () => {
        this.setState({ clicked: {boolean: !this.state.clicked.boolean, bot: null} })
    }

    handleDropDown = (event) => {
        const selected = event.target.innerText
        selected === 'All' ? this.setState({ option: '' }) : this.setState({ option: selected })
    }

    render() {
        const bots = this.state.bots.filter(bot => bot.bot_class.includes(this.state.option))

        return (
            <div className='container'>
                <Dropdown placeholder='Select Bot Class' selection options={options} onChange={this.handleDropDown}/>
                <YourBotArmy army={this.state.army} handleRemove={this.handleRemove} />
                {this.state.clicked.boolean
                    ? <BotSpecs bot={this.state.clicked.bot} handleEnlist={this.handleEnlist} handleBack={this.handleBack}/>
                : <BotCollection bots={bots} handleProfile={this.handleProfile}/>}
            </div>
        )
    }
}

export default BotsPage
