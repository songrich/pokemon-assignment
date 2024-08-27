import React from "react";
import { useNavigate } from "react-router-dom";

function PokemonList({ pokemonList, onAddPokemon }) {
  const navigate = useNavigate();
  const handleClick = (pokemonId) => {
    navigate(`/pokemon-detail?id=${pokemonId}`);
  };
  return (
    <>
      <div className="card-container">
        {pokemonList.map((pokemon) => {
          return (
            <div
              className="card"
              key={pokemon.id}
              onClick={function () {
                handleClick(pokemon.id);
              }}
            >
              <img src={`${pokemon.img_url}`} alt="포켓몬 정보" />
              <p>{pokemon.korean_name} </p>
              <p>number:0{pokemon.id}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAddPokemon(pokemon);
                }}
              >
                추가
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default PokemonList;
