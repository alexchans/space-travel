import React, { useState, useEffect } from "react";
import axios from "axios";

function SpaceStationEntry() {
  return (
    <div>
      <h1>Space Station</h1>

      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="inOrbitOf">In Orbit Of (Planet Name)</label>
        <input type="text" id="inOrbitOf" />

        <label htmlFor="ownedByPlanet">Owned By Planet</label>
        <input type="text" id="ownedByPlanet" />

        <button type="submit">Submit</button>
      </form>

      <h2>All Space Stations</h2>
      <ul>
        {/* Replace this with real data */}
        {[
          { name: "OrbitalOne", inOrbitOf: "Earth", ownedByPlanet: "Earth" },
          { name: "MarsHub", inOrbitOf: null, ownedByPlanet: "Mars" },
        ].map((station) => (
          <li key={station.name}>
            {station.name} – In Orbit Of: {station.inOrbitOf || "N/A"}, Owned
            By: {station.ownedByPlanet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpaceStationEntry;
