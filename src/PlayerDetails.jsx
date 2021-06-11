import React, { Component } from 'react'

export default class PlayerDetails extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
