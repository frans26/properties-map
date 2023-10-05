import { createContext, useContext, useState } from "react";

const SelectPropertyContext = createContext(null);

export const SelectPropertyProvider = ({ children }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <SelectPropertyContext.Provider
      value={{ selectedProperty, setSelectedProperty }}
    >
      {children}
    </SelectPropertyContext.Provider>
  );
};

export const useSelectProperty = () => {
  return useContext(SelectPropertyContext);
};
