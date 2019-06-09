import React, { Component } from "react";
import "./Pokecard.css";

const PokeAPI =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    return (
      <div className="Pokecard">
        <div className="Pokecard-content">
          <h1 className="Pokecard-header">{name}</h1>
          <img
            src={`${PokeAPI}${id}.png`}
            alt="name"
            className="Pokecard-img"
          />
          <div className="Pokecard-info">
            <div>Type: {type}</div>
            <div>EXP: {base_experience}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokecard;
