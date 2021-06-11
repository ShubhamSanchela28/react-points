import React, { Component } from "react";

export default class ClassCmp extends Component {
  constructor() {
    super();
    this.state = { color: "State", carcolor: "red", date : new Date() };
  }

  changeColor = () => {
    this.setState({ carcolor: "blue" });
    console.log("Color Changed");
  };

  render() {
    return (
      <div>
        <h2>
          This is Class Component with {this.props.color} and this by{" "}
          {this.state.color}
        </h2>
        <h3>This Date {this.state.date.toLocaleTimeString()} Comes from State</h3>
        <Garage />I Like {this.props.car} Car!
        <br />
        It is {this.state.carcolor} in Color
        <br />
        <button onClick={this.changeColor}>Change Color!</button>
      </div>
    );
  }
}

class Garage extends React.Component {
  render() {
    return <h6>This data is from Garage Component</h6>;
  }
}
