import React from "react";
import "./ProjectList.css";
import Project from "../Project/Project";

class ProjectList extends React.Component {
  render() {
    return (
      <div className="projectList">
        {this.props.projects.map((project, i) => {
          return <Project key={i} project={project} />;
        })}
      </div>
    );
  }
}

export default ProjectList;
