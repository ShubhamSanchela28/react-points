import React, { Component } from 'react'

export default class PlayerContent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {this.props.clickHandler(this.props.id, this.props.name)}} style={{ color : this.props.active ? "red" : "blue" }} >
                    {this.props.name}
                </button>
            </div>
        )
    }
}
