import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Home";

import PlanetEntry from "./PlanetEntry";
import SpaceStationEntry from "./SpaceStationEntry";
import SpaceportEntry from "./SpaceportEntry";
import RouteEntry from "./RouteEntry";
import SpacecraftEntry from "./SpacecraftEntry";
import FlightEntry from "./FlightEntry";

import SpaceportQuery from "./SpaceportQuery";
import RouteQuery from "./RouteQuery";
import FlightFinder from "./FlightFinder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />

        {/* Data Entry */}
        <Route path="/planet-entry" element={<PlanetEntry />} />
        <Route path="/space-station-entry" element={<SpaceStationEntry />} />
        <Route path="/spaceport-entry" element={<SpaceportEntry />} />
        <Route path="/route-entry" element={<RouteEntry />} />
        <Route path="/spacecraft-entry" element={<SpacecraftEntry />} />
        <Route path="/flight-entry" element={<FlightEntry />} />

        {/* Queries */}
        <Route path="/spaceport-query" element={<SpaceportQuery />} />
        <Route path="/route-query" element={<RouteQuery />} />
        <Route path="/flight-finder" element={<FlightFinder />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
