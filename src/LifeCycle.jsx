import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggledOn : true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
      clearInterval(this.timerID)
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClick = () => {
      this.setState(prevState => ({
          isToggledOn : !prevState.isToggledOn
      }))
  }

  shoot = (a) => {
      alert(a)
  }
  
  render() {
    return (
      <div>
        <h2>This is Life Cycle Methods</h2>
        <h4>{this.state.date.toLocaleTimeString()}</h4>
        <button onClick={() => this.shoot("passing arguments")} >Argumnet</button><br />
        <button onClick={this.handleClick}>
            {this.state.isToggledOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
