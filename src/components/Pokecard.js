import React, { Component } from "react";

const PokeAPI =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    return (
      <div>
        <p>{name}</p>
        <img src={`${PokeAPI}${id}.png`} alt="name" />
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
