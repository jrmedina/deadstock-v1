import React, { useState, useEffect } from "react";
import { fetchData } from "../apiCalls";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

const App = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setInventory(res.data));
  }, []);

  handleInput = (event, query) => {
    const results = inventory.filter((shoe) =>
      shoe.query.toLowerCase().includes(event.target.value.toLowerCase())
    );
     setInventory(results);
    console.log(results);
  };

  return (
    <main>
      <h1>DEADSTOCK</h1>
      <SearchBar handleInput={handleInput} />
      <RecentlyAdded inventory={inventory} />
    </main>
  );
};

export default App;
