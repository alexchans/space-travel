import React, { useState, useEffect } from "react";
import axios from "axios";

function RouteQuery() {
  return (
    <div>
      <h1>Route Query</h1>

      <form>
        <label htmlFor="originSpaceport">Origin Spaceport</label>
        <input type="text" id="originSpaceport" />

        <label htmlFor="originPlanet">Origin Planet</label>
        <input type="text" id="originPlanet" />

        <label htmlFor="destinationSpaceport">Destination Spaceport</label>
        <input type="text" id="destinationSpaceport" />

        <label htmlFor="destinationPlanet">Destination Planet</label>
        <input type="text" id="destinationPlanet" />

        <button type="submit">Search</button>
      </form>

      <h2>Flights on This Route</h2>
      <ul>
        <li>Flight F123 - ExplorerX - Monday - 10:00 - 2.5 hrs</li>
      </ul>
    </div>
  );
}

export default RouteQuery;
