import { useEffect, useState } from "react";

export const useImage = (pokemon: string) => {
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/images/${pokemon}.png`);
        setImage(response.default);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchImage();
  }, [pokemon]);

  return image;
};
