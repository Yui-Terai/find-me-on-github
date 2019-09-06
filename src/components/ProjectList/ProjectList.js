import React from "react";
import "./ProjectList.css";
import Project from "../Project/Project";

class ProjectList extends React.Component {
  render() {
    return (
      <div className="projectList">
        {this.props.testObj.map((item, i) => {
          return <Project key={i} item={item} />;
        })}
      </div>
    );
  }
}

export default ProjectList;
