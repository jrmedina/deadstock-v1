import CreatePost from "../user components/CreatePost/CreatePost";
import SearchContainer from "../SearchContainer/SearchContainer";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded";
import Closet from "../user components/Closet/Closet";
import React, { useState, useEffect } from "react";
import Login from "../user components/Login/Login";
import { Route, Switch } from "react-router-dom";
import Enlarged from "../Enlarged/Enlarged";
import ListView from "../ListView/ListView";
import { fetchData } from "../../apiCalls";
import NavBar from "../NavBar/NavBar";
import Error from "../Error/Error";

import "./App.css";

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState();
  const [closet, setCloset] = useState({});

  useEffect(() => {
    fetchData("inventory").then((res) => setInventory(res.data));
    fetchData("users").then((res) => setUsers(res.data));
  }, []);

  const handleSearch = (input) => {
    const normalizedInput = input.toLowerCase();
    const matchingResults = inventory.reduce((acc, shoe) => {
      const { title, brand, colors, size } = shoe;
      const matchesTitle = title.toLowerCase().includes(normalizedInput);
      const matchesBrand = brand.toLowerCase().includes(normalizedInput);
      const matchesSize = size.toString() === normalizedInput;
      const matchesColor = colors
        .join()
        .toLowerCase()
        .includes(normalizedInput);
      const doesShoeMatchInput =
        matchesTitle || matchesBrand || matchesColor || matchesSize;
      if (doesShoeMatchInput) return [...acc, shoe];
      return acc;
    }, []);
    const resultsWithoutDuplicates = [...new Set(matchingResults)];
    input ? setSearch(resultsWithoutDuplicates) : setSearch();
  };

  // ------------USER--------------------------
  const login = (user) => {
    const closet = inventory.filter((shoe) => shoe.user === user.username);
    setCloset({ username: user.username, closet: closet });
  };

  const addPost = (newPost) => {
    setInventory([...inventory, newPost]);
    setCloset({
      ...closet,
      closet: [...closet.closet, { ...newPost, user: closet.username }],
    });
  };

  const updatePost = (post) => {
    const filtered = inventory.filter((s) => s.id !== post.id);
    setInventory([...filtered, post]);
  };

  const deletePost = (e) => {
    const filteredInventory = inventory.filter(
      (s) => s.id !== parseInt(e.target.id)
    );
    setInventory(filteredInventory);
    const filteredCloset = closet.closet.filter(
      // eslint-disable-next-line
      (s) => s.id != parseInt(e.target.id)
    );
    setCloset({ ...closet, closet: filteredCloset });
  };

  const logout = () => {
    setCloset({});
  };

  const home = search ? (
    <SearchContainer query={search} />
  ) : (
    <RecentlyAdded inventory={inventory} />
  );

  return (
    <main className="App">
      <NavBar
        user={closet.username}
        handleInput={handleSearch}
        logout={logout}
        inventory={inventory}
      />
      <Switch>
        <Route
          exact
          path="/:username/closet"
          render={() => (
            <Closet
              deletePost={deletePost}
              closet={closet.closet}
              update={updatePost}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={() => <Login users={users} login={login} />}
        />
        <Route
          exact
          path="/createpost"
          render={() => <CreatePost addPost={addPost} />}
        />
        <Route exact path="/all" render={() => <ListView all={inventory} />} />
        <Route
          exact
          path="/inventory/:id"
          render={({ match }) => {
            const pair = inventory.find(
              (s) => s.id === parseInt(match.params.id)
            );
            return <Enlarged pair={pair} />;
          }}
        />
        <Route exact path="/" render={() => home} />
        <Route path="*" render={() => <Error />} />
      </Switch>
    </main>
  );
};

export default App;
