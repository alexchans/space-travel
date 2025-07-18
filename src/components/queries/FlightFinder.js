import React, { useState, useEffect } from "react";
import axios from "axios";

function FlightFinder() {
  return (
    <div>
      <h1>Flight Finder</h1>

      <form>
        <label htmlFor="origin">Origin Spaceport</label>
        <input type="text" id="origin" />

        <label htmlFor="originPlanet">Origin Planet</label>
        <input type="text" id="originPlanet" />

        <label htmlFor="destination">Destination Spaceport</label>
        <input type="text" id="destination" />

        <label htmlFor="destinationPlanet">Destination Planet</label>
        <input type="text" id="destinationPlanet" />

        <label htmlFor="dayOfWeek">Day of Week</label>
        <input type="text" id="dayOfWeek" />

        <label htmlFor="earliestTime">Earliest Departure Time</label>
        <input type="text" id="earliestTime" />

        <label htmlFor="maxStops">Maximum Stops</label>
        <input type="number" id="maxStops" />

        <label htmlFor="maxTravelTime">Maximum Travel Time (hours)</label>
        <input type="text" id="maxTravelTime" />

        <button type="submit">Find Flights</button>
      </form>

      <h2>Matching Itineraries</h2>
      <ul>
        <li>Itinerary: F123 → F567 Total Time: 5.5 hrs Stops: 1</li>
      </ul>
    </div>
  );
}

export default FlightFinder;
