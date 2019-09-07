import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ProjectList from "../ProjectList/ProjectList";
import ReadMeContainer from "../ReadMeContainer/ReadMeContainer";
import Github from "../../util/Github";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      repos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchRepo = this.searchRepo.bind(this);
  }

  // Will be called when a user is typing in the search form: at SearchBar component
  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  // Will be called when a user clicks the search button: at SearchBar component
  handleClick(e) {
    this.searchRepo(this.state.username);
    e.preventDefault();
  }

  searchRepo(username) {
    Github.searchRepo(this.state.username).then(repos => {
      this.setState({ repos: repos });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <ProjectList repos={this.state.repos} />
        <ReadMeContainer />
      </div>
    );
  }
}

export default App;
