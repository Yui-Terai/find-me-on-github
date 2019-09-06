import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <input
          placeholder="Enter Username"
          onChange={this.props.handleChange}
        />
        <button type="button" onClick={this.props.handleClick}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
