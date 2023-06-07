import * as React from "react";

type LocationContextType = {
  userLocation: Coordinates | null;
  setUserLocation: React.Dispatch<React.SetStateAction<Coordinates | null>>;
};

export const LocationContext = React.createContext<LocationContextType>({
  userLocation: null,
  setUserLocation: () => {},
});

type Props = {
  children: React.ReactNode;
};
export const LocationProvider = ({ children }: Props) => {
  const [userLocation, setUserLocation] = React.useState<Coordinates | null>(
    null
  );

  React.useEffect(() => {
    const getUserLocation = async () => {
      try {
        const coordinates = await new Promise<Coordinates>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              (position) => resolve(position.coords),
              (error) => reject(error)
            );
          }
        );

        setUserLocation(coordinates);
      } catch (error) {
        console.error("Error fetching user location", error);
      }
    };

    getUserLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};
