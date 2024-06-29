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
