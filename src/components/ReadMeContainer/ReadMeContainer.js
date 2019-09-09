import React from "react";
import "./ReadMeContainer.scss";

class ReadMeContainer extends React.Component {
  render() {
    return (
      //  Render readme which is holded in a string in state
      <div className="readMeContainer">
        {/* Add style when the selected readMe appears */}
        <div
          style={
            this.props.readMe
              ? {
                  color: "#0C134E",
                  width: "800px",
                  margin: "30px",
                  padding: "20px",
                  background: "#fef8e7",
                  borderRadius: "6px"
                }
              : {}
          }
        >
          {this.props.readMe}
        </div>
      </div>
    );
  }
}

export default ReadMeContainer;
