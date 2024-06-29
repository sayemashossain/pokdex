import { usePokemonImage } from "../../services/usePokemonImage";

export type Types =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fight"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

export type PokemonInfoType = {
  attack: number;
  defense: number;
  abilities: string;
  hp: number;
  name: string;
  percentage_male: number;
  pokedex_number: number;
  speed: number;
  type1: Types;
  type2: Types;
};

export type PokemonGridItemProps = {
  pokemonInfo: PokemonInfoType;
};

export const PokedexGridItem: React.FC<PokemonGridItemProps> = ({
  pokemonInfo,
}: PokemonGridItemProps) => {
  const { name } = pokemonInfo;

  const imageName = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/'+/g, "")
    .replace(/:+/g, "")
    .replace(/\.+/g, "")
    .replace(/é+/g, "e")
    .replace(/♀+/g, "-f")
    .replace(/♂+/g, "-m");

  const image = usePokemonImage(imageName);

  return (
    <div
      style={{
        position: "absolute",
        left: 60,
        top: 140,
        zIndex: 5,
        width: "155px",
        height: "85px",
        borderRadius: "2px",
        border: "1px solid #442222",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#222222",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};
