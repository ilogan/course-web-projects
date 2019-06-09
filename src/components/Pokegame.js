import React, { Component } from "react";
import Pokedex from "./Pokedex";

const randomIndex = array => {
  return Math.floor(Math.random() * array.length);
};

const splitDeck = array => {
  // each player gets 1/2 the deck
  const cardsPerPlayer = array.length / 2;

  // player 1 starts with with all cards
  const p1 = [...array];

  // player 2 starts with none
  const p2 = [];

  // cards are randomly taken from p1 and given to p2 until they have equal cards
  let card = {};
  for (let i = 0; i < cardsPerPlayer; ++i) {
    card = p1.splice(randomIndex(p1), 1)[0];
    p2.push(card);
  }
  return [p1, p2];
};

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };

  render() {
    const deck = splitDeck(this.props.pokemon);
    return (
      <div>
        <Pokedex pokemon={deck[0]} />
        <Pokedex pokemon={deck[1]} />
      </div>
    );
  }
}

export default Pokegame;
