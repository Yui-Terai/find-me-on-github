import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
// import ProjectList from "../ProjectList/ProjectList";
import ReadMeContainer from "../ReadMeContainer/ReadMeContainer";
import Github from "../../util/Github";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      projects: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchProject = this.searchProject.bind(this);
  }

  // Will be called when a user is typing in the search form: at SearchBar component
  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  // Will be called when a user clicks the search button: at SearchBar component
  handleClick(e) {
    this.searchProject(this.state.username);
    e.preventDefault();
  }

  searchProject(username) {
    Github.searchProject(this.state.username).then(projects => {
      this.setState = { projects: projects };
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleChange={this.handleChange} handleClick={this.handleClick}/>
        {/* <ProjectList projects={this.state.projects} /> */}
        <ReadMeContainer />
      </div>
    );
  }
}

export default App;
