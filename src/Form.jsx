import React, { Component, useRef } from "react";
import PropTypes from "prop-types";

const ExampleTextInput = React.forwardRef((props, ref) => (
  <input type="text" placeholder="Welcome" ref={ref} />
));
const exampleInputRef = React.createRef();

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      value: "India",
      x: 0,
      y: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (e) => {
    // alert("You Selected :" + this.state.value);
    e.preventDefault();
      console.log("Entered value: "+exampleInputRef.current.value);
  };

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    const pizzaPreference = this.props.likesPizza ? "does" : "does not";
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <ExampleTextInput ref={exampleInputRef} />
          <button>Submit</button>
          <br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="usa">USA</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
          <h1>Move the mouse around!</h1>
          <p>
            The current mouse position is ({this.state.x}, {this.state.y})
          </p>
          <h1> years old and {pizzaPreference} like pizza </h1>
        </div>
      </div>
    );
  }
}
Form.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  likesPizza: PropTypes.bool.isRequired,
};
