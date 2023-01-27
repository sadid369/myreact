import React from "react";

class Button extends React.Component {
  render() {
    console.log("button component render");
    const { change, local } = this.props;
    return (
      <button type="button" onClick={() => change(local)}>
        Click Here
      </button>
    );
  }
}

export default Button;
