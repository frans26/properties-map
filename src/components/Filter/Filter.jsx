import { useState } from "react";

import { useSelectProperty } from "../../context/useSelectProperty";

import IconAngleLeft from "../../assets/icons/angle-small-left.svg";
import IconCross from "../../assets/icons/cross-small.svg";
import IconCheck from "../../assets/icons/check.svg";

import { COUNCILS } from "../../data/properties";

import "./Filter.css";

const Filter = () => {
  const [showfilter, setShowFilter] = useState(true);
  const { selectedCouncils, setSelectedCouncils } = useSelectProperty();

  const onSelectCouncil = (council) => {
    let currentCouncils = [...selectedCouncils];

    if (currentCouncils.includes(council)) {
      currentCouncils = currentCouncils.filter((c) => c !== council);
    } else {
      currentCouncils.push(council);
    }

    setSelectedCouncils(currentCouncils);
  };

  return (
    <div className="filter-wrapper">
      {showfilter && (
        <div className="filter">
          <div className="filter-header">
            <h3 className="filter-header-text">Filter</h3>

            <div
              className="cross-container"
              onClick={() => setShowFilter(!showfilter)}
            >
              <img src={IconCross} alt="cross-small" />
            </div>
          </div>

          <div className="filter-content">
            {COUNCILS.map((council) => (
              <div
                className={`council-filter-item ${
                  selectedCouncils.includes(council) && "active"
                }`}
                key={council}
                onClick={() => onSelectCouncil(council)}
              >
                <div className="icon-check-container">
                  {selectedCouncils.includes(council) && (
                    <img className="icon-check" src={IconCheck} alt="check" />
                  )}
                </div>

                <p className="council-text">{council}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className="arrow-container"
        onClick={() => setShowFilter(!showfilter)}
      >
        <img
          className={showfilter ? "angle-left" : "angle-right"}
          src={IconAngleLeft}
          alt="angle-small-left"
        />
      </div>
    </div>
  );
};

export default Filter;
