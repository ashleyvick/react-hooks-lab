import axios from "axios";
import React, { useState, useEffect } from "react";

const Pokemon = (props) => {
  const { name } = props.match.params;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((results) => {
      setPokemon(results.data);
    });
  }, [name]);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites?.front_default} />
    </div>
  );
};
export default Pokemon;
