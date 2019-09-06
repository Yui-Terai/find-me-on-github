import React from "react";
import "./ReadMeContainer.css";
import ReadMe from "../ReadMe/ReadMe";

class ReadMeContainer extends React.Component {
  render() {
    return (
      <div className="readMeContainer">
        <ReadMe />
      </div>
    );
  }
}

export default ReadMeContainer;
