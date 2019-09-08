import React from "react";
import "./Project.scss";

class Project extends React.Component {
  render() {
    return (
      // Render each repo
      <div className="project">{this.props.repo.name}</div>
    );
  }
}

export default Project;
