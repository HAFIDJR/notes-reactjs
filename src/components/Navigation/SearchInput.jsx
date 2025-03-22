import React from "react";
import NavigationNotes from "./Navigation";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navigation-bar">
        <NavigationNotes />
        <div className="search-input">
          <input
            className="input"
            type="text"
            value={this.props.judul}
            onChange={this.props.onJudulSearchChange}
            placeholder=" Cari Judul"
            name=" Cari Judul"
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
