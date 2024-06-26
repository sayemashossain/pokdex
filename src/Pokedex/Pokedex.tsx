import * as d3 from "d3";
import { DSVRowArray } from "d3";
import React, { useState } from "react";
import csvFile from "../assets/pokemon.csv?url";
// import { PokedexGrid } from "./PokedexGrid/PokedexGrid";
import {
  PokedexGridItem,
  PokemonInfoType,
  Types,
} from "./PokedexGridItem/PokedexGridItem";
import { PokedexSVG } from "./PokedexSVG/PokedexSVG";

export const Pokedex: React.FC = () => {
  const [fetchedCSVData, setFetchedCSVdata] = useState<DSVRowArray | null>(
    null,
  );

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (!fetchedCSVData) {
    fetch(csvFile)
      .then((response) => response.text())
      .then((x) => {
        const parsed = d3.csvParse(x);
        setFetchedCSVdata(parsed);
      });

    return null;
  }

  const {
    attack,
    defense,
    hp,
    name,
    percentage_male,
    pokedex_number,
    speed,
    type1,
    type2,
  } = fetchedCSVData[0];

  const pokemonInfo: PokemonInfoType = {
    attack: parseInt(attack),
    defense: parseInt(defense),
    hp: parseInt(hp),
    name: name,
    percentage_male: parseFloat(percentage_male),
    pokedex_number: parseInt(pokedex_number),
    speed: parseInt(speed),
    type1: type1 as Types,
    type2: type2 as Types,
  };

  return (
    <div
      style={{
        position: "relative",
        height: "410px",
        width: "610px",
        marginBottom: "50px",
      }}
      onClick={handleClick}
    >
      {isOpen ? <PokedexGridItem pokemonInfo={pokemonInfo} /> : null}
      <PokedexSVG pokemonData={fetchedCSVData} isOpen={isOpen} />
    </div>
  );
};

// against_bug: "1",
// against_dark: "1",
// against_dragon: "1",
// against_electric: "0.5",
// against_fairy: "0.5",
// against_fight: "0.5",
// against_fire: "2",
// against_flying: "2",
// against_ghost: "1",
// against_grass: "0.25",
// against_ground: "1",
// against_ice: "2",
// against_normal: "1",
// against_poison: "1",
// against_psychic: "2",
// against_rock: "1",
// against_steel: "1",
// against_water: "0.5",
