import { LocationMarkerIcon } from "@heroicons/react/solid";
import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { env } from "../next.config";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  //Transform search results into latitude and longitute.
  // ex: { latitude: 52.516272, longitude: 13.377722 }

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/rpoullet/ckymnwnwn0dmi15pq6yxfndfr?"}
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocationMarkerIcon
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer w-8 text-white"
            />
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="z-10"
            >
              <div className="">
                <p className="capitalize">{result.title}</p>
                <p className="text-right font-semibold">{result.price}</p>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
