import React from "react";
import { DSVRowArray } from "d3";
import { PokedexGridItem } from "../PokedexGridItem/PokedexGridItem";

type PokedexGridProps = { pokemonData: DSVRowArray<string> };

export const PokedexGrid: React.FC<PokedexGridProps> = (
  props: PokedexGridProps,
) => {
  const { pokemonData } = props;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        justifyContent: "center",
      }}
    >
      {pokemonData
        ? pokemonData.map(({ name, hp, pokedex_number }) => (
            <PokedexGridItem
              key={pokedex_number}
              name={name}
              hp={hp}
              pokedexNumber={pokedex_number}
            />
          ))
        : null}
    </div>
  );
};
