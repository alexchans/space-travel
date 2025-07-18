import React, { useState, useEffect } from "react";
import axios from "axios";

function PlanetEntry() {
  return (
    <div>
      <h1>Planet</h1>

      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="size">Size</label>
        <input type="text" id="size" />

        <label htmlFor="population">Population</label>
        <input type="text" id="population" />

        <button type="submit">Submit</button>
      </form>

      <h2>All Planets</h2>
      <ul>
        {/* Replace this with actual planet data later */}
        {[
          { name: "Earth", size: 510100000, population: 8000000000 },
          { name: "Mars", size: 144800000, population: 0 },
        ].map((planet) => (
          <li key={planet.name}>
            {planet.name} – Size: {planet.size}, Population: {planet.population}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetEntry;
