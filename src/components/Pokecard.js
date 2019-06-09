import React, { Component } from "react";

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    return (
      <div>
        <p>{name}</p>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="name"
        />
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
