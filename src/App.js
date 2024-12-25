import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Beer Collection</h1>
      <input
        type="text"
        placeholder="Search for a beer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="card-container">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="card">
            <img src={beer.image} alt={beer.name} className="card-image" />
            <h2 className="card-title">{beer.name}</h2>
            <p className="card-description">{beer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
