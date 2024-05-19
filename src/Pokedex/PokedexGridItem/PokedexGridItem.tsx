import { useImage } from "../../services/useImage";

export const PokedexGridItem = ({ name, hp }: { name: string; hp: string }) => {
  const image = useImage(name.toLowerCase());

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50px",
        backgroundColor: "grey",
      }}
    >
      <img src={image} />
      <div>
        {name} {hp}
      </div>
    </div>
  );
};
