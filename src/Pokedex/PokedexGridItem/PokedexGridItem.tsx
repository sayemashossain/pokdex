import { useImage } from "../../services/useImage";

export const PokedexGridItem = ({
  name,
  // hp,
  pokedexNumber,
}: {
  name: string;
  hp: string;
  pokedexNumber: string;
}) => {
  const imageName = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/'+/g, "")
    .replace(/:+/g, "")
    .replace(/\.+/g, "")
    .replace(/é+/g, "e")
    .replace(/♀+/g, "-f")
    .replace(/♂+/g, "-m");

  const image = useImage(imageName);

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "10px",
        border: "1px solid grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
      }}
    >
      <div>
        #{pokedexNumber} {name}
      </div>
      <div>
        <img src={image} />
      </div>
    </div>
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
