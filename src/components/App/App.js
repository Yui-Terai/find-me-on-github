import React from "react";
import "./App.scss";
import SearchBar from "../SearchBar/SearchBar";
import ProjectList from "../ProjectList/ProjectList";
import ReadMeContainer from "../ReadMeContainer/ReadMeContainer";
import Github from "../../util/Github";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      repos: [],
      readMe: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchRepo = this.searchRepo.bind(this);
    this.handleClickReadMe = this.handleClickReadMe.bind(this);
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

  // Will be called in the handleClick function
  searchRepo(username) {
    Github.searchRepo(this.state.username).then(repos => {
      this.setState({ repos: repos });
    });
  }

  // Will be called when a user click the see readme button
  handleClickReadMe(e) {
    Github.getReadMe(this.state.username, e.target.value).then(readMe => {
      this.setState({ readMe: readMe });
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Find Me on Github</h1>
        <SearchBar
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <ProjectList
          repos={this.state.repos}
          handleClickReadMe={this.handleClickReadMe}
        />
        <ReadMeContainer readMe={this.state.readMe} />
      </div>
    );
  }
}

export default App;
