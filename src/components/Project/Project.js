import React from "react";
import "./Project.css";

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <div>{this.props.repo.name}</div>
      </div>
    );
  }
}

export default Project;
