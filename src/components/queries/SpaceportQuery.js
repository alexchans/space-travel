import React, { useState, useEffect } from "react";
import axios from "axios";

function SpaceportQuery() {
  return (
    <div>
      <h1>Spaceport Query</h1>

      <form>
        <label htmlFor="spaceportName">Spaceport Name</label>
        <input type="text" id="spaceportName" />

        <label htmlFor="planetName">Planet Name</label>
        <input type="text" id="planetName" />

        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" />

        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" />

        <button type="submit">Search</button>
      </form>

      <h2>Results</h2>
      <ul>
        {/* Replace with fetched results */}
        <li>
          Arrivals and departures at Alpha Port from 2025-07-01 to 2025-07-10
        </li>
      </ul>
    </div>
  );
}

export default SpaceportQuery;
