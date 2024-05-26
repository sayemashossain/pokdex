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
