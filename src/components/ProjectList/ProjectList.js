import React from "react";
import "./ProjectList.scss";
import Project from "../Project/Project";

class ProjectList extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        {/* Map returned value from searchRepo function */}
        {this.props.repos.map((repo, i) => {
          return (
            <React.Fragment key={i}>
              <div className="row m-3">
                {/* Pass the array of list of repo's name as a prop named repo */}
                <div className="col-sm-8 col-md-6 col-lg-6 d-flex justify-content-center">
                  <Project repo={repo} />
                </div>
                {/* Pass the repo's name as value: We will use this value for the url when we fetch readme */}
                <div className="col-sm-4 col-md-6 col-lg-6 d-flex justify-content-center">
                  <button className='readMe-button'
                    value={repo.name}
                    onClick={this.props.handleClickReadMe}
                  >
                    See ReadMe
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default ProjectList;
