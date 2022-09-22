import React, { useState, useEffect } from "react";
import { fetchData } from "../../apiCalls";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded";
import SearchContainer from "../SearchContainer/SearchContainer";
import NavBar from "../NavBar/NavBar";
import Login from "../Login/Login";
import error from "../../assets/error.jpg"
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Closet from "../Closet/Closet";
import ListView from "../ListView/ListView";

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState();
  const [closet, setCloset] = useState([]);

  useEffect(() => {
    fetchData("/").then((res) => setInventory(res.data));
    fetchData("/api/users").then((res) => setUsers(res.data));
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
    <RecentlyAdded inventory={inventory} />
  );

  const checkLogin = (username, password) => {
    let closet = [];
    users.find((user) => {
      username === user.username && user.password === password
        ? (closet = inventory.filter((shoe) => shoe.user === username))
        : console.log(false);
    });
    setCloset({ username: username, closet: closet });
  };

  const updatePost = (post) => {
    const filtered = inventory.filter((s) => s.id != post.id);
    // const closet2 = closet.filter((s) => s.id != post.id);
    setInventory([...filtered, post]);
    console.log(inventory);
    
  };

  return (
    <main>
      <NavBar user={closet.username} handleInput={handleInput} />
      <Switch>
        <Route
          exact
          path="/:username/closet"
          render={() => <Closet closet={closet.closet} update={updatePost} />}
        />
        <Route
          exact
          path="/login"
          render={() => <Login checkLogin={checkLogin} />}
        />
        <Route exact path="/all" render={() => <ListView all={inventory} />} />
        <Route exact path="/" render={() => toBeDisplayed} />
        <Route
          path="*"
          render={() => (
            <img src= {error} alt="error"/>
          )}
        />
      </Switch>
    </main>
  );
};

export default App;
