import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      judul: props.defaultKeyword || "",
    };

    this.onJudulSearchChange = this.onJudulSearchChange.bind(this);
  }

  onJudulSearchChange(event) {
    const { value } = event.target;
    this.props.search(value, this.props.onArsip);
    this.setState(() => {
      return {
        judul: value,
      };
    });
  }

  render() {
    return (
      <div className="search-input">
        <input
          className="input"
          type="text"
          value={this.state.judul}
          onChange={this.onJudulSearchChange}
          placeholder=" Cari Judul"
          name=" Cari Judul"
        />
      </div>
    );
  }
}

export default SearchInput;
