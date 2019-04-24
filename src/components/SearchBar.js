import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  handleChange = event => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
