import React, { useState, useEffect } from "react";
import { fetchData } from "../apiCalls";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded";
import SearchBar from "../SearchBar/SearchBar";
import SearchContainer from "../SearchContainer/SearchContainer";
import "./App.css";

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetchData().then((res) => setInventory(res.data));
  }, []);

  const handleInput = (i) => {
    let res = [];
    let final;
    inventory.forEach((s) => s.title.toLowerCase().includes(i) && res.push(s));
    inventory.forEach((s) => s.code.toLowerCase().includes(i) && res.push(s));
    inventory.forEach((s) => s.brand.toLowerCase().includes(i) && res.push(s));
    inventory.forEach((s) =>
      s.colors.forEach((c) => c.toLowerCase().includes(i) && res.push(s))
    );
    inventory.forEach((s) => s.size.includes(i) && res.push(s));
    i ? (final = [...new Set(res)]) : (final = "");
    setSearch(final);
  };

  const toBeDisplayed = search ? (
    <SearchContainer query={search} />
  ) : (
    <div>
      <RecentlyAdded inventory={inventory} />
    </div>
  );

  return (
    <main>
      {/* <h1>DEADSTOCK</h1> */}
      <SearchBar handleInput={handleInput} />
      {toBeDisplayed}
    </main>
  );
};

export default App;
