import React, { useState } from "react";
import { DSVRowArray } from "d3";
import * as d3 from "d3";
import csvFile from "../assets/pokemon.csv?url";
// import { PokedexGrid } from "./PokedexGrid/PokedexGrid";
import { PokedexSVG } from "./PokedexSVG/PokedexSVG";

export const Pokedex: React.FC = () => {
  const [fetchedCSVData, setFetchedCSVdata] = useState<DSVRowArray | null>(
    null,
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

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
  }

  return fetchedCSVData ? (
    <>
      <div
        style={{
          position: "relative",
          height: "400px",
          width: "620px",
          marginBottom: "50px",
        }}
        onClick={handleClick}
      >
        <PokedexSVG pokemonData={fetchedCSVData} isOpen={isOpen} />
      </div>
    </>
  ) : null;
};
