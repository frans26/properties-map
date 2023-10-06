import { createContext, useContext, useMemo, useState } from "react";
import { COUNCILS, PROPERTIES } from "../data/properties";

const SelectPropertyContext = createContext(null);

export const SelectPropertyProvider = ({ children }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedCouncils, setSelectedCouncils] = useState(() => COUNCILS);

  const propertyList = useMemo(() => {
    return PROPERTIES.filter((pr) => selectedCouncils.includes(pr.council));
  }, [selectedCouncils]);

  return (
    <SelectPropertyContext.Provider
      value={{
        selectedProperty,
        setSelectedProperty,
        selectedCouncils,
        setSelectedCouncils,
        propertyList,
      }}
    >
      {children}
    </SelectPropertyContext.Provider>
  );
};

export const useSelectProperty = () => {
  return useContext(SelectPropertyContext);
};
