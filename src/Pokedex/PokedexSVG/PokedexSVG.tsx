import { DSVRowArray } from "d3";
import React from "react";

type PokedexGridProps = { pokemonData: DSVRowArray<string>; isOpen: boolean };

export const PokedexSVG: React.FC<PokedexGridProps> = (
  props: PokedexGridProps,
) => {
  const { pokemonData, isOpen } = props;
  console.log(pokemonData[0]);

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
      <path
        fill="#ee2222"
        stroke="#442222"
        stroke-width="10"
        d="
            M 5,105
            V 30
            A 25 25 90 0 1 30,5
            H 280
            A 25 25 90 0 1 305,30
            V 65
            H 240
            L 185,105
            H 5
            z
        "
      />
      <path
        fill="#ee2222"
        stroke="#442222"
        stroke-width="10"
        d="
            M 5,105
            V 350
            A 25 25 90 0 0 30,380
            H 280
            V 65
            H 240
            L 185,105
            H 5
            z
        "
      />

      {isOpen ? (
        <path
          fill="#ee2222"
          stroke="#442222"
          stroke-width="10"
          d="
            M 570,105
            V 350
            A 25 25 90 0 1 545,380
            H 305
            V 65
            H 335
            L 390,105
            H 570
            z
        "
        />
      ) : null}
      <g id="hinges">
        <path
          fill="#ee2222"
          stroke="#442222"
          stroke-width="10"
          d="
            M 270,65
            V 380
            H 305
            V 65
            H 270
            z
          "
        />
        <path
          fill="#8a302c"
          stroke="#442222"
          stroke-width="10"
          d="
            M 270,65
            V 100
            H 305
            V 65
            H 270
            z
          "
        />
        <path
          fill="#8a302c"
          stroke="#442222"
          stroke-width="10"
          d="
            M 270,340
            V 380
            H 305
            V 340
            H 270
            z
          "
        />
        <path
          fill="#ee2222"
          stroke="#442222"
          stroke-width="10"
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
          fill="#ee2222"
          stroke="#442222"
          stroke-width="10"
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

      <g id="buttons">
        <circle
          cx="55"
          cy="55"
          r="23"
          fill="#51e4f5"
          stroke="#442222"
          stroke-width="4"
        />
        <g stroke="#442222" stroke-width="4" id="small-buttons">
          <circle cx="225" cy="35" r="8" fill="red" />
          <circle cx="250" cy="35" r="8" fill="yellow" />
          <circle cx="275" cy="35" r="8" fill="green" />
        </g>
      </g>

      {!isOpen ? (
        <>
          <path
            fill="#442222"
            stroke="#442222"
            stroke-width="10"
            stroke-linejoin="round"
            stroke-linecap="round"
            d="
            M 60,230 
            L 40,215 
            L 40,245 
            z
          "
          />
          <path
            fill="yellow"
            stroke="#442222"
            stroke-width="4"
            d="
            M 60,230 
            L 40,215 
            L 40,245 
            z
          "
          />
        </>
      ) : null}

      {!isOpen ? (
        <path
          fill="#8a302c"
          stroke="#442222"
          stroke-width="4"
          d="
            M 80,340
            A 5 5 180 0 0 80,350
            H 200
            A 5 5 180 0 0 200,340
            z
        "
        />
      ) : null}

      {isOpen ? (
        <rect
          x="40"
          y="145"
          width="200"
          height="200"
          rx="5"
          fill="#51e4f5"
          stroke="#442222"
          stroke-width="4"
        />
      ) : null}
    </svg>
  );
};
