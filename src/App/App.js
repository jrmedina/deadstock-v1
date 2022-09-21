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

  const handleInput = (i) => {
    let res = [];
    inventory.forEach((s) => s.title.toLowerCase().includes(i) && res.push(s));
    inventory.forEach((s) => s.code.toLowerCase().includes(i) && res.push(s));
    inventory.forEach((s) => s.brand.toLowerCase().includes(i) && res.push(s));
    inventory.forEach((s) => s.colors.forEach((c) => c.toLowerCase().includes(i) && res.push(s)));
    inventory.forEach((s) => s.size.includes(input) && res.push(s));
    let final = [...new Set(res)];
    setInventory(final)
    
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
