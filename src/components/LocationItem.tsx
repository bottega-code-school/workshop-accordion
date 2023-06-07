import * as React from "react";
import { LocationData } from "./LocationList";
import * as geolib from "geolib";
import { LocationContext } from "./LocationProvider";

const metersToMiles = 0.000621371;

interface LocationItemProps {
  location: LocationData;
}

export const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  const { userLocation } = React.useContext(LocationContext);

  const distanceInMiles = React.useMemo(() => {
    if (!userLocation) return null;

    const distanceInMeters = geolib.getDistance(
      { latitude: userLocation.latitude, longitude: userLocation.longitude },
      {
        latitude: location.coordinates.latitude,
        longitude: location.coordinates.longitude,
      }
    );

    return distanceInMeters * metersToMiles;
  }, [userLocation, location?.coordinates]);

  return (
    <div>
      <h3>{location.name}</h3>
      <p>Latitude: {location.coordinates.latitude}</p>
      <p>Longitude: {location.coordinates.longitude}</p>
      {distanceInMiles !== null && (
        <p>{distanceInMiles.toFixed(2)} miles away</p>
      )}
    </div>
  );
};
