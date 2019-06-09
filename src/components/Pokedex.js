import React, { Component } from "react";

import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <Pokecard id={4} name="Charmander" type="fire" base_experience={62} />
      </div>
    );
  }
}

export default Pokedex;
