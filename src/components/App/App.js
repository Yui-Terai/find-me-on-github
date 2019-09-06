import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

// Will be called when a user is typing in the search form: at SearchBar component
  handleChange(e) {
    return this.setState({ username: e.target.value });
  }

// Will be called when a user clicks the search button: at SearchBar component
  handleClick() {
    return this.state.username;
  }

  render() {
    console.log(`im username: ${this.state.username}`);
    return (
      <div className="App">
        <SearchBar handleChange={this.handleChange} />
        <div>test!!!</div>
      </div>
    );
  }
}

export default App;
