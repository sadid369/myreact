import React from "react";

class Button extends React.Component {
  render() {
    console.log("button component render");
    const { change, local, show, enable } = this.props;
    if (!enable) {
      return null;
    }
    return (
      <div>
        <button type="button" onClick={() => change(local)}>
          {local === "bn-BD" ? "Change Clock" : "ঘড়ি পরিবর্তন করুন"}
        </button>
        {show && <p>Hello</p>}
      </div>
    );
  }
}

export default Button;
