import React, { useState } from "react";
import { DSVRowArray } from "d3";
import * as d3 from "d3";
import csvFile from "../assets/pokemon.csv?url";
import { PokedexGrid } from "./PokedexGrid/PokedexGrid";

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

  return fetchedCSVData ? <PokedexGrid pokemonData={fetchedCSVData} /> : null;
};
