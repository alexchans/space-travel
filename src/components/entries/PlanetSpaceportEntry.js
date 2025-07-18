import React, { useState, useEffect } from "react";
import axios from "axios";

function PlanetSpaceportEntry() {
  return (
    <div>
      <h1>Planet Spaceport</h1>

      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="planetName">Planet Name</label>
        <input type="text" id="planetName" />

        <label htmlFor="capacity">Capacity</label>
        <input type="text" id="capacity" />

        <label htmlFor="feePerSeat">Fee Per Seat</label>
        <input type="text" id="feePerSeat" />

        <button type="submit">Submit</button>
      </form>

      <h2>All Planet Spaceports</h2>
      <ul>
        {/* Replace this with actual data */}
        {[
          {
            name: "Alpha Port",
            planetName: "Earth",
            capacity: 150,
            feePerSeat: 12.5,
          },
          {
            name: "Red Dock",
            planetName: "Mars",
            capacity: 100,
            feePerSeat: 15.0,
          },
        ].map((port) => (
          <li key={`${port.name}-${port.planetName}`}>
            {port.name} – Planet: {port.planetName}, Capacity: {port.capacity},
            Fee: ${port.feePerSeat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetSpaceportEntry;
