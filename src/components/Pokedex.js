import React, { Component } from "react";

import Pokecard from "./Pokecard";

class Pokedex extends Component {
  render() {
    return (
      <div>
        <Pokecard id={4} name="Charmander" type="fire" base_experience={62} />
      </div>
    );
  }
}

export default Pokedex;
