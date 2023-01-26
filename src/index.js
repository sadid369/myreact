import React from "react";
import ReactDOM from "react-dom";
// const element = React.createElement("h1", null, "Hello World");
const index = 0;
class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading" tabIndex={index}>
        <span className="text">
          Hello World - {this.props.children}{" "}
          {new Date().toLocaleTimeString(this.props.local)}
        </span>
      </h1>
    );
  }
}

ReactDOM.render(
  <Clock local="bn-BD">test</Clock>,
  document.getElementById("root")
);
