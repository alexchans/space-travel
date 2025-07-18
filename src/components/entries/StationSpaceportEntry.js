import React, { useState, useEffect } from "react";
import axios from "axios";

function StationSpaceportEntry() {
  return (
    <div>
      <h1>Station Spaceport</h1>

      <form>
        <label htmlFor="stationName">Station Name</label>
        <input type="text" id="stationName" />

        <label htmlFor="capacity">Capacity</label>
        <input type="text" id="capacity" />

        <label htmlFor="feePerSeat">Fee Per Seat</label>
        <input type="text" id="feePerSeat" />

        <button type="submit">Submit</button>
      </form>

      <h2>All Station Spaceports</h2>
      <ul>
        {/* Replace with real data */}
        {[
          { stationName: "OrbitalX", capacity: 50, feePerSeat: 20.0 },
          { stationName: "RingStation", capacity: 30, feePerSeat: 25.0 },
        ].map((port) => (
          <li key={port.stationName}>
            {port.stationName} – Capacity: {port.capacity}, Fee: $
            {port.feePerSeat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StationSpaceportEntry;
