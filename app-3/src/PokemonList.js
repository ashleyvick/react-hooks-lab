import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonList = (props) => {
  const [results, setList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setList(res.data.results);
    });
  }, []);

  return (
    <div>
      {results.map((pokemon) => {
        return (
          <Link key={pokemon.url} to={`/pokemon/${pokemon.name}`}>
            <h1>{pokemon.name}</h1>
          </Link>
        );
      })}
    </div>
  );
};
export default PokemonList;
