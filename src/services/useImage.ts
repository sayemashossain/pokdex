import { useEffect, useState } from 'react';

export const useImage = (stationCode: string) => {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/stations/${stationCode}.jpg`);
                setImage(response.default);
            } catch (err) {
                const response = await import(`../assets/default.png`);
                setImage(response.default);
            }
        };

        fetchImage();
    }, [stationCode]);

    return image;
};
