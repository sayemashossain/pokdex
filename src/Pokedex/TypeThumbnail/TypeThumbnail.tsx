import { useTypeImage } from "../../services/useTypeImage";

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

const typeColors = {
  normal: "#9FA19F",
  fire: "#E62829",
  fight: "#FF8000",
  water: "#2980EF",
  flying: "#81B9EF",
  grass: "#3FA129",
  poison: "#9141CB",
  electric: "#FAC000",
  ground: "#915121",
  psychic: "#EF4179",
  rock: "#AFA981",
  ice: "#3DCEF3",
  bug: "#91A119",
  dragon: "#5060E1",
  ghost: "#704170",
  dark: "#624D4E",
  steel: "#60A1B8",
  fairy: "#EF70EF",
};

export type TypeThumbnailProps = {
  typeName: Types;
};

export const TypeThumbnail: React.FC<TypeThumbnailProps> = ({
  typeName,
}: TypeThumbnailProps) => {
  const image = useTypeImage(typeName);

  return (
    <div
      style={{
        display: "inline-block",
        width: "20px",
        height: "20px",
        borderRadius: "100%",
        backgroundColor: `${typeColors[typeName]}`,
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
};

/* 
{
  "abilities": "['Overgrow', 'Chlorophyll']",
  "against_bug": "1",
  "against_dark": "1",
  "against_dragon": "1",
  "against_electric": "0.5",
  "against_fairy": "0.5",
  "against_fight": "0.5",
  "against_fire": "2",
  "against_flying": "2",
  "against_ghost": "1",
  "against_grass": "0.25",
  "against_ground": "1",
  "against_ice": "2",
  "against_normal": "1",
  "against_poison": "1",
  "against_psychic": "2",
  "against_rock": "1",
  "against_steel": "1",
  "against_water": "0.5",
  "attack": "49",
  "base_egg_steps": "5120",
  "base_happiness": "70",
  "base_total": "318",
  "capture_rate": "45",
  "classfication": "Seed Pokémon",
  "defense": "49",
  "experience_growth": "1059860",
  "height_m": "0.7",
  "hp": "45",
  "japanese_name": "Fushigidaneフシギダネ",
  "name": "Bulbasaur",
  "percentage_male": "88.1",
  "pokedex_number": "1",
  "sp_attack": "65",
  "sp_defense": "65",
  "speed": "45",
  "type1": "grass",
  "type2": "poison",
  "weight_kg": "6.9",
  "generation": "1",
  "is_legendary": "0"
}
*/
