import React from "react";
import "./ProjectList.css";
import Project from "../Project/Project";

class ProjectList extends React.Component {
  render() {
    return (
      <div className="projectList">
        {/* Map returned value from searchRepo function */}
        {this.props.repos.map((repo, i) => {
          return (
            <div key={i}>
              {/* Pass the array of list of repo's name as a prop named repo */}
              <Project repo={repo} />
              {/* Pass the repo's name as value: We will use this value for the url when we fetch readme */}
              <button value={repo.name} onClick={this.props.handleClickReadMe}>
                See ReadMe
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProjectList;
