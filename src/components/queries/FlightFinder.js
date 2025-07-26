import React, { useState } from "react";
import axios from "axios";

function FlightFinder() {
    const [formData, setFormData] = useState({
        originSpaceport: "",
        originPlanet: "",
        destinationSpaceport: "",
        destinationPlanet: "",
        dayOfWeek: "",
        earliestTime: "",
        maxStops: "",
        maxTravelTime: "",
    });

    const [itineraries, setItineraries] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const cleanedParams = {
                ...formData,
                maxStops: formData.maxStops ? parseInt(formData.maxStops) : 0,
                maxTravelTime: formData.maxTravelTime ? parseFloat(formData.maxTravelTime) : 0,
            };

            const response = await axios.get("http://localhost:8080/api/flights/search", {
                params: cleanedParams,
            });

            setItineraries(response.data);
        } catch (error) {
            console.error("❌ Error fetching itineraries:", error);
            setItineraries([]); // fallback
        } finally {
            setHasSearched(true); // trigger result section
        }
    };

    return (
        <div>
            <h1>Flight Finder</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="originSpaceport">Origin Spaceport</label>
                <input type="text" id="originSpaceport" value={formData.originSpaceport} onChange={handleChange} />

                <label htmlFor="originPlanet">Origin Planet</label>
                <input type="text" id="originPlanet" value={formData.originPlanet} onChange={handleChange} />

                <label htmlFor="destinationSpaceport">Destination Spaceport</label>
                <input type="text" id="destinationSpaceport" value={formData.destinationSpaceport} onChange={handleChange} />

                <label htmlFor="destinationPlanet">Destination Planet</label>
                <input type="text" id="destinationPlanet" value={formData.destinationPlanet} onChange={handleChange} />

                <label htmlFor="dayOfWeek">Day of Week</label>
                <input type="text" id="dayOfWeek" value={formData.dayOfWeek} onChange={handleChange} />

                <label htmlFor="earliestTime">Earliest Departure Time</label>
                <input type="text" id="earliestTime" value={formData.earliestTime} onChange={handleChange} />

                <label htmlFor="maxStops">Maximum Stops</label>
                <input type="number" id="maxStops" value={formData.maxStops} onChange={handleChange} />

                <label htmlFor="maxTravelTime">Maximum Travel Time (hours)</label>
                <input type="text" id="maxTravelTime" value={formData.maxTravelTime} onChange={handleChange} />

                <button type="submit">Find Flights</button>
            </form>

            {hasSearched && (
                <div>
                    <h2>Matching Itineraries</h2>
                    <ul>
                        {itineraries.length === 0 ? (
                            <li>No itineraries found</li>
                        ) : (
                            itineraries.map((itinerary, index) => (
                                <li key={index}>
                                    Itinerary:{" "}
                                    {itinerary.flights?.map(f => f.flightNumber).join(" → ")} |{" "}
                                    Total Time: {itinerary.totalTime} hrs |{" "}
                                    Stops: {itinerary.totalStops}
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default FlightFinder;
