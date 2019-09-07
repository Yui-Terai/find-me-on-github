import React from "react";
import "./ProjectList.css";
import Project from "../Project/Project";

class ProjectList extends React.Component {
  render() {
    return (
      <div className="projectList">
        {this.props.repos.map((repo, i) => {
          return <Project key={i} repo={repo} />;
        })}
      </div>
    );
  }
}

export default ProjectList;
