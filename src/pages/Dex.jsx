import React, { useState } from "react";
import { MOCK_DATA } from "../mock";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const addPokemon = (pokemon) => {
    const alreadySelected = selectedPokemon.find((chosenPokemon) => {
      return chosenPokemon && chosenPokemon.id === pokemon.id;
    });

    if (alreadySelected) {
      return alert("이미 선택된 포켓몬이에요.");
    }
    const emptyIndex = selectedPokemon.indexOf(null);

    if (emptyIndex === -1) {
      return alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
    }

    const newSelectedPokemon = [...selectedPokemon];
    newSelectedPokemon[emptyIndex] = pokemon;

    setSelectedPokemon(newSelectedPokemon);
  };
  const removePokemon = (pokemon) => {
    const updatedPokemonList = selectedPokemon.map((existPokemon) =>
      existPokemon && existPokemon.id === pokemon.id ? null : existPokemon
    );
    setSelectedPokemon(updatedPokemonList);
  };

  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
