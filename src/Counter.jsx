import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  handleChange = (value) => {
    this.setState((prev) => {
      return {
        counter: prev.counter + value
      };
    });
  };

  render() {
    return (
      <>
        <h1>Timer</h1>
        <p>{this.state.counter}</p>

        <button onClick={() => this.handleChange(1)}>increase</button>
        <button onClick={() => this.handleChange(-1)}>decrease</button>
      </>
    );
  }
}

export { Counter };
