import React, { Component } from 'react'
import PlayerContent from './PlayerContent'
import PlayerDetails from './PlayerDetails'

export default class LiftingStateUp extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedPlayer : [0,0],
            playerName : ""
        }
    }

    updateSelectedPlayer = (id, name) => {
        var arr = [0,0,0,0,0]
        arr[id] = 1
        this.setState({
            playerName :  name,
            selectedPlayer : arr
        })
    }

    render() {
        return (
            <div>
                <h1>Lifting State Up</h1>
                <PlayerContent active={this.state.selectedPlayer[0]} clickHandler={this.updateSelectedPlayer} id={0} name="Shubham" />
                <PlayerContent active={this.state.selectedPlayer[1]} clickHandler={this.updateSelectedPlayer} id={1} name="Sanchela" />
                <PlayerDetails name={this.state.playerName} />
            </div>
        )
    }
}
