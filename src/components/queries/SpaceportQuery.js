import React, { useState } from "react";
import axios from "axios";

function SpaceportQuery() {
  const [spaceportName, setSpaceportName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("=== FRONTEND SUBMIT ===");
    console.log("Form data:", { spaceportName, planetName, startDate, endDate });

    if (!spaceportName || !planetName || !startDate || !endDate) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      console.log("Making API call...");
      const response = await axios.get("http://localhost:8080/api/spaceports/traffic", {
        params: { spaceportName, planetName, startDate, endDate },
      });

      console.log("API Response:", response.data);
      setResults(response.data);
    } catch (error) {
      console.error("=== API ERROR ===");
      console.error(error);
      alert("Failed to fetch data: " + (error.response?.data || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Spaceport Query</h1>
      <form onSubmit={handleSubmit}>
        <label>Spaceport Name</label>
        <input value={spaceportName} onChange={(e) => setSpaceportName(e.target.value)} />

        <label>Planet Name</label>
        <input value={planetName} onChange={(e) => setPlanetName(e.target.value)} />

        <label>Start Date</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

        <label>End Date</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      <h2>Results</h2>
      {results.length === 0 && !loading && <p>No results found.</p>}
      <ul>
        {results.map((item, idx) => (
          <li key={idx}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default SpaceportQuery;
