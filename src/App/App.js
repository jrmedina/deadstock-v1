import React, { useState, useEffect } from "react";
import { fetchData } from "../apiCalls";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded"

const App = () => {
  const [inventory, setInventory] = useState();

  useEffect(() => {
    fetchData().then((res) =>
     setInventory(res.data));
  }, []);

  return <div>
    <h1>DEADSTOCK</h1>
    <RecentlyAdded inventory={inventory}/>

  </div>;
};

export default App;
