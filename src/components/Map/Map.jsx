import { useMemo, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";

import { useSelectProperty } from "../../context/useSelectProperty";

import "./Map.css";

import { PROPERTIES } from "../../data/properties";

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapComponent = () => {
  const { setSelectedProperty } = useSelectProperty();

  const mapRef = useRef();
  const [viewState, setViewState] = useState({
    longitude: 145,
    latitude: -38,
    zoom: 9,
  });

  const handleMarkerClick = (property) => {
    setSelectedProperty(property);
    mapRef.current.flyTo({
      center: [property.longitude, property.latitude],
      duration: 750,
      zoom: 9,
    });
  };

  const pins = useMemo(
    () =>
      PROPERTIES.map((prop) => (
        <Marker
          longitude={prop.longitude}
          latitude={prop.latitude}
          key={prop.property_id}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            handleMarkerClick(prop);
          }}
        ></Marker>
      )),
    []
  );

  return (
    <div className="map-container">
      <Map
        mapboxAccessToken={mapboxAccessToken}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        ref={mapRef}
      >
        {pins}
      </Map>
    </div>
  );
};

export default MapComponent;
