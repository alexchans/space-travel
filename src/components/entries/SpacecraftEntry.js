import React, { useState, useEffect } from "react";
import axios from "axios";

function SpacecraftEntry() {
  return (
    <div>
      <h1>Spacecraft</h1>

      <form>
        <label htmlFor="typeName">Type Name</label>
        <input type="text" id="typeName" />

        <label htmlFor="capacity">Capacity</label>
        <input type="text" id="capacity" />

        <label htmlFor="range">Range</label>
        <input type="text" id="range" />

        <button type="submit">Submit</button>
      </form>

      <h2>All Spacecraft</h2>
      <ul>
        {[
          { typeName: "ExplorerX", capacity: 200, range: 100000 },
          { typeName: "SwiftStar", capacity: 150, range: 75000 },
        ].map((craft) => (
          <li key={craft.typeName}>
            {craft.typeName} – Capacity: {craft.capacity}, Range: {craft.range}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpacecraftEntry;
