import React from "react";
import { useNavigate } from "react-router-dom";
import { poketball } from "../assets/poketball";
function Dashboard({ selectedPokemon, onRemovePokemon }) {
  const navigate = useNavigate();
  const handleClick = (pokemonId) => {
    navigate(`/pokemon-detail?id=${pokemonId}`);
  };
  return (
    <>
      <div className="dashboard-container">
        <h2>나만의 포켓몬</h2>
        {selectedPokemon.map((pokemon) => {
          if (pokemon) {
            return (
              <div
                className="pickPokemon"
                key={pokemon.id}
                onClick={function () {
                  handleClick(pokemon.id);
                }}
              >
                <img src={`${pokemon.img_url}`} alt="포켓몬" />
                <p>{pokemon.korean_name} </p>
                <p>number:0{pokemon.id}</p>
                <button
                  onClick={function (e) {
                    e.stopPropagation();
                    onRemovePokemon(pokemon);
                  }}
                >
                  삭제
                </button>
              </div>
            );
          } else {
            return (
              <>
                <div className="pokemonball-container">
                  <img src={poketball} className="pokemonball-card"></img>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
}

export default Dashboard;
