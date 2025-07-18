import React, { useState, useEffect } from "react";
import axios from "axios";

function RouteEntry() {
  return (
    <div>
      <h1>Route</h1>

      <form>
        <label htmlFor="originSpaceportName">Origin Spaceport Name</label>
        <input type="text" id="originSpaceportName" />

        <label htmlFor="originPlanetName">Origin Planet Name</label>
        <input type="text" id="originPlanetName" />

        <label htmlFor="destinationSpaceportName">
          Destination Spaceport Name
        </label>
        <input type="text" id="destinationSpaceportName" />

        <label htmlFor="destinationPlanetName">Destination Planet Name</label>
        <input type="text" id="destinationPlanetName" />

        <label htmlFor="distance">Distance</label>
        <input type="text" id="distance" />

        <button type="submit">Submit</button>
      </form>

      <h2>All Routes</h2>
      <ul>
        {/* Replace with real data */}
        {[
          {
            originSpaceportName: "Alpha Port",
            originPlanetName: "Earth",
            destinationSpaceportName: "Red Dock",
            destinationPlanetName: "Mars",
            distance: 78000,
          },
        ].map((route, index) => (
          <li key={index}>
            From {route.originSpaceportName} ({route.originPlanetName}) to{" "}
            {route.destinationSpaceportName} ({route.destinationPlanetName}) –
            Distance: {route.distance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RouteEntry;
