import { useEffect, useState } from "react";



export const useTypeImage = (type: string) => {
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/images/types/${type}.png`);
        setImage(response.default);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchImage();
  }, [type]);

  return image;
};
