import { DSVRowArray } from "d3";
import React from "react";

type PokedexGridProps = { pokemonData: DSVRowArray<string>; isOpen: boolean };

export const PokedexSVG: React.FC<PokedexGridProps> = (
  props: PokedexGridProps,
) => {
  const { pokemonData, isOpen } = props;
  console.log(pokemonData[0]);

  const pokedexBase = "#ee2222";
  const pokedexHinge = "#8a302c";
  const pokedexOutline = "#442222";
  const pokedexBlueLight = "#51e4f5";

  const pokedexGreenLight = "green";
  const pokedexYellowLight = "yellow";
  const pokedexRedLight = "red";

  const pokedexScreen = "#eeeeee";
  const pokedexOpenClip = "#ffc00c";

  const outerStrokeWidth = 10;

  return (
    <svg
      viewBox="0 0 610 410"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {/* UPPER LEVEL */}
      {/* BASE */}
      <path
        fill={pokedexBase}
        stroke={pokedexOutline}
        stroke-width={outerStrokeWidth}
        d="
            M 5,85
            V 30
            A 25 25 90 0 1 30,5
            H 280
            A 25 25 90 0 1 305,30
            V 55
            H 240
            L 185,85
            H 5
            z
        "
      />
      {/* BUTTONS */}
      <g id="buttons">
        <circle
          cx="50"
          cy="45"
          r="21"
          fill={pokedexBlueLight}
          stroke={pokedexOutline}
          stroke-width="4"
        />
        <g stroke={pokedexOutline} stroke-width="4" id="small-buttons">
          <circle cx="225" cy="30" r="8" fill={pokedexRedLight} />
          <circle cx="250" cy="30" r="8" fill={pokedexYellowLight} />
          <circle cx="275" cy="30" r="8" fill={pokedexGreenLight} />
        </g>
      </g>

      {/* LOWER BASE */}
      <path
        fill={pokedexBase}
        stroke={pokedexOutline}
        stroke-width={outerStrokeWidth}
        d="
            M 5,85
            V 350
            A 25 25 90 0 0 30,375
            H 280
            V 55
            H 240
            L 185,85
            H 5
            z
        "
      />

      {/* HINGES */}
      <g id="hinges">
        <path
          fill={pokedexBase}
          stroke={pokedexOutline}
          stroke-width={outerStrokeWidth}
          d="
            M 270,55
            V 375
            H 305
            V 55
            H 270
            z
          "
        />
        <path
          fill={pokedexHinge}
          stroke={pokedexOutline}
          stroke-width={outerStrokeWidth}
          d="
            M 270,55
            V 100 
            H 305
            V 55
            H 270
            z
          "
        />
        <path
          fill={pokedexHinge}
          stroke={pokedexOutline}
          stroke-width={outerStrokeWidth}
          d="
            M 270,340
            V 375
            H 305
            V 340
            H 270
            z
          "
        />
        <path
          fill={pokedexBase}
          stroke={pokedexOutline}
          stroke-width={outerStrokeWidth}
          d="
            M 270,100
            V 120
            H 305
            V 100
            H 270
            z
          "
        />
        <path
          fill={pokedexBase}
          stroke={pokedexOutline}
          stroke-width={outerStrokeWidth}
          d="
           M 270,320
            V 340
            H 305
            V 320
            H 270
            z
        "
        />
      </g>

      {/* OPEN STATE */}
      {/* SCREEN */}
      {isOpen ? (
       

        <path
          fill={pokedexScreen}
          stroke={pokedexOutline}
          stroke-width="4"
          d="
            M 40,120
            V 235
            L 70,265
            H 235
            V 120
            z
          "
        />
      ) : null}
      {/* OPEN PANEL */}
      {isOpen ? (
        <path
          fill={pokedexBase}
          stroke={pokedexOutline}
          stroke-width={outerStrokeWidth}
          d="
            M 570,85
            V 350
            A 25 25 90 0 1 545,375
            H 305
            V 55
            H 335
            L 390,85
            H 570
            z
        "
        />
      ) : null}
      {/* CLOSED STATE */}
      {!isOpen ? (
        <>
          {/* CLIP */}
          <path
            fill={pokedexOpenClip}
            stroke={pokedexOutline}
            stroke-width="4"
            stroke-linejoin="round"
            stroke-linecap="round"
            d="
              M 60,230 
              L 40,215 
              L 40,245 
              z
            "
          />
          {/* DIVET */}
          <path
            fill={pokedexHinge}
            stroke={pokedexOutline}
            stroke-width="4"
            d="
              M 80,340
              A 5 5 180 0 0 80,350
              H 200
              A 5 5 180 0 0 200,340
              z
            "
          />
        </>
      ) : null}
    </svg>
  );
};
