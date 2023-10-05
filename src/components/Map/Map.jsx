import { useSelectProperty } from "../../context/useSelectProperty";

import "./Map.css";

import { PROPERTIES } from "../../data/properties";

const Map = () => {
  const { setSelectedProperty } = useSelectProperty();

  return (
    <div className="map-container">
      <h3>Map</h3>

      <div>
        {PROPERTIES.map((p) => (
          <div
            className="property-item"
            key={p.property_id}
            onClick={() => setSelectedProperty(p)}
          >
            <div>Council: {p.council}</div>
            <div>Full address: {p.full_address}</div>
            <div>Postcode: {p.postcode}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
