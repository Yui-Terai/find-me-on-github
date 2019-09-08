import React from "react";
import "./ReadMeContainer.css";

class ReadMeContainer extends React.Component {
  render() {
    return (
      // Render readme which is holded in a string in state
      <div className="readMeContainer">
        <div>{this.props.readMe}</div>
      </div>
    );
  }
}

export default ReadMeContainer;
