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
    fetchData("/api/inventory").then((res) => setInventory(res.data));
    fetchData("/api/users").then((res) => setUsers(res.data));
  }, []);

  const handleSearch = (input) => {
    let lc = input.toLowerCase()
    let res = [];
    let final;
    inventory.forEach((s) => s.title.toLowerCase().includes(lc) && res.push(s));
    inventory.forEach((s) => s.code.toLowerCase().includes(lc) && res.push(s));
    inventory.forEach((s) => s.brand.toLowerCase().includes(lc) && res.push(s));
    inventory.forEach((s) =>
      s.colors.forEach((c) => c.toLowerCase().includes(lc) && res.push(s))
    );
    inventory.forEach((s) => s.size.includes(lc) && res.push(s));

    input ? (final = [...new Set(res)]) : (final = "");
    setSearch(final);
  };

  // ------------USER--------------------------
  const checkLogin = (username, password) => {
    const user = users.find(
      (user) => username === user.username && user.password === password
    );
    const closet = inventory.filter((shoe) => shoe.user === user.username);
    setCloset({ username: username, closet: closet });
  };

  const addPost = (newPost) => {
    console.log(newPost);

    setInventory([...inventory, newPost]);
    setCloset({
      ...closet,
      closet: [
        ...closet.closet,
        { ...newPost, id: Date.now(), user: closet.username },
      ],
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
      (s) => s.id != parseInt(e.target.id)
    );
    setCloset({ ...closet, closet: filteredCloset });
  };

  const logout = () => {
    setCloset([]);
  };

  const home = search ? (
    <SearchContainer query={search} />
  ) : (
    <RecentlyAdded inventory={inventory} />
  );

  return (
    <main>
      <NavBar
        user={closet.username}
        handleInput={handleSearch}
        logout={logout}
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
          render={() => <Login checkLogin={checkLogin} />}
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
