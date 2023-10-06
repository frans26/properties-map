import { SelectPropertyProvider } from "./context/useSelectProperty";
import Sidebar from "./components/Sidebar/Sidebar";
import Map from "./components/Map/Map";
import Filter from "./components/Filter/Filter";

import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  return (
    <main>
      <SelectPropertyProvider>
        <Filter />

        <Map />

        <Sidebar />
      </SelectPropertyProvider>
    </main>
  );
}

export default App;
