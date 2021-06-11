import React, { Component } from "react";

export default class BoilingWater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const temperature = this.state.temperature;
    return (
      <>
        <fieldset>
          <legend>Enter Temperature in Celcius :</legend>
          <input
            type="number"
            value={temperature}
            onChange={this.handleChange}
          />
          <BoilingVerdict celcius={parseFloat(temperature)} />
        </fieldset>
      </>
    );
  }
}

const BoilingVerdict = (props) => {
  if (props.celcius >= 100) {
    return <p>The Water would boil</p>;
  } else {
    return <p>The water would not boil</p>;
  }
};
