import React from "react";
import "./SearchBar.scss";

class SearchBar extends React.Component {
  render() {
    return (
      // Create serach bar with search button
      <div className="searchBar">
        <div className="searchBar-field">
          <input
            placeholder="Enter Username"
            onChange={this.props.handleChange}
          />
        </div>
        <div className="searchBar-button">
          <button type="button" onClick={this.props.handleClick}>
            SEARCH
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
