import { TypeThumbnail } from "../TypeThumbnail/TypeThumbnail";
import { PokemonGridItemProps } from "./PokedexGridItem";

const getAbilities = (stringArray: string) => {
  const aaa = stringArray.slice(1, stringArray.length - 2);

  const bbb = aaa.replace("'", "");

  const ccc = bbb.split(",");

  console.log(ccc);

  return ccc;
};

export const PokemonData: React.FC<PokemonGridItemProps> = ({
  pokemonInfo,
}: PokemonGridItemProps) => {
  const { name, hp, type1, type2, attack, defense, abilities } = pokemonInfo;

  getAbilities(abilities);

  return (
    <div
      style={{
        position: "absolute",
        left: 335,
        top: 120,
        width: "205px",
        height: "225px",
        fontFamily: "courier",
        fontSize: "16px",
        color: "#eeeeee",
        textAlign: "start",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        gap: "4px",
        backgroundColor: "#222222",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "20px",
          fontWeight: "bolder",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        {name}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>HP:</div>
        <div>{hp}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Attack:</div>
        <div>{attack}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Defense:</div>
        <div>{defense}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Type:</div>
        <div style={{ display: "flex", gap: "2px" }}>
          <div>
            <TypeThumbnail typeName={type1} />
          </div>
          <div>/</div>
          <div>
            <TypeThumbnail typeName={type2} />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Abilities:</div>
        <div>{getAbilities(abilities)}</div>
      </div>
    </div>
  );
};
