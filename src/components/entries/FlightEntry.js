import React, { useState, useEffect } from "react";
import axios from "axios";

function FlightEntry() {
  return (
    <div>
      <h1>Flight</h1>

      <form>
        <label htmlFor="flightNumber">Flight Number</label>
        <input type="text" id="flightNumber" />

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

        <label htmlFor="spacecraftType">Spacecraft Type</label>
        <input type="text" id="spacecraftType" />

        <label htmlFor="dayOfWeek">Day of Week</label>
        <input type="text" id="dayOfWeek" />

        <label htmlFor="departureTime">Departure Time</label>
        <input type="text" id="departureTime" />

        <label htmlFor="flightTime">Flight Time</label>
        <input type="text" id="flightTime" />

        <button type="submit">Submit</button>
      </form>

      <h2>All Flights</h2>
      <ul>
        {[
          {
            flightNumber: "F123",
            originSpaceportName: "Alpha Port",
            originPlanetName: "Earth",
            destinationSpaceportName: "Red Dock",
            destinationPlanetName: "Mars",
            spacecraftType: "ExplorerX",
            dayOfWeek: "Monday",
            departureTime: "10:00",
            flightTime: "2.5",
          },
        ].map((flight) => (
          <li key={flight.flightNumber}>
            Flight {flight.flightNumber}: {flight.originSpaceportName} (
            {flight.originPlanetName}) → {flight.destinationSpaceportName} (
            {flight.destinationPlanetName}) using {flight.spacecraftType} on{" "}
            {flight.dayOfWeek} at {flight.departureTime}, Flight Time:{" "}
            {flight.flightTime} hrs
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightEntry;
