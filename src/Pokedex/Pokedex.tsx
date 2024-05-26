import React, { useState } from "react";
import { DSVRowArray } from "d3";
import * as d3 from "d3";
import csvFile from "../assets/pokemon.csv?url";
import { PokedexGridItem } from "./PokedexGridItem/PokedexGridItem";

export const Pokedex: React.FC = () => {
  const [fetchedCSVData, setFetchedCSVdata] = useState<DSVRowArray | null>(
    null,
  );

  if (!fetchedCSVData) {
    fetch(csvFile)
      .then((response) => response.text())
      .then((x) => {
        const parsed = d3.csvParse(x);
        setFetchedCSVdata(parsed);
      });
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {fetchedCSVData
        ? fetchedCSVData.map(({ name, hp, pokedex_number }) => (
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
