import { useEffect, useState } from "react";

import { useSelectProperty } from "../../context/useSelectProperty";

import IconAngleLeft from "../../assets/icons/angle-small-left.svg";
import IconCross from "../../assets/icons/cross-small.svg";

import "./Sidebar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { selectedProperty } = useSelectProperty();

  useEffect(() => {
    if (selectedProperty) {
      setShowSidebar(true);
    }
  }, [selectedProperty]);

  return (
    <div className="sidebar-wrapper">
      <div
        className="arrow-container"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <img
          className={showSidebar ? "angle-right" : "angle-left"}
          src={IconAngleLeft}
          alt="angle-small-left"
        />
      </div>

      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-header">
            <h3 className="sidebar-header-text">Details</h3>

            <div
              className="cross-container"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <img src={IconCross} alt="cross-small" />
            </div>
          </div>

          {selectedProperty && (
            <div className="sidebar-content">
              <p className="info">
                <strong>Council: </strong> {selectedProperty.council}
              </p>
              <p className="info">
                <strong>Full address: </strong> {selectedProperty.full_address}
              </p>
              <p className="info">
                <strong>Postcode: </strong> {selectedProperty.postcode}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
