import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  state = { date: new Date(), local: "bn-BD" };
  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  handleClick = (local) => {
    this.setState({
      local: local,
    });
    console.log("The button was click");
  };
  render() {
    console.log("Clock component render");
    const { date, local } = this.state;

    return (
      <div>
        <h1 className="heading">
          <span className="text">
            Hello World - {this.props.children} {date.toLocaleTimeString(local)}
          </span>
        </h1>
        {local === "bn-BD" ? (
          <Button
            change={this.handleClick}
            local="en-US"
            show={false}
            enable={true}
          />
        ) : (
          <Button change={this.handleClick} local="bn-BD" show={true} enable />
        )}
      </div>
    );
  }
}

export default Clock;
