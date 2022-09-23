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

  const home = search ? (
    <SearchContainer query={search} />
  ) : (
    <RecentlyAdded inventory={inventory} />
  );

  const checkLogin = (username, password) => {
    let closet = [];
    users.find((user) => {
      username === user.username && user.password === password
        ? (closet = inventory.filter((shoe) => shoe.user === username))
        : console.log(false); //this will  need to be refactored to proper error handling
    });
    setCloset({ username: username, closet: closet });
  };

  const updatePost = (post) => {
    const filtered = inventory.filter((s) => s.id !== post.id);
    setInventory([...filtered, post]);
  };

  const logout = () => {
    setCloset([]);
  };

  const deletePost = (id) => {
    const filtered = inventory.filter((s) => s.id !== id);
    setInventory(filtered);
    const filtered2 = closet.closet.filter((s) => s.id != id);
    setCloset({ ...closet, closet: filtered2 });
  };

  const addPost = (newPost) => {
    setInventory([...inventory, newPost]);
    setCloset({
      ...closet,
      closet: [
        ...closet.closet,
        { ...newPost, id: Date.now(), user: closet.username },
      ],
    });
  };

  return (
    <main>
      <NavBar
        user={closet.username}
        handleInput={handleInput}
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
        {/* <Route
          exact
          path="/inventory/:id"
          render={({ match }) => {
            const pair = inventory.find(
              (s) => s.id === parseInt(match.params.id)
            );
            return <Enlarged pair={pair} />;
          }}
        /> */}
        <Route exact path="/" render={() => home} />
        <Route path="*" render={() => <Error />} />
      </Switch>
    </main>
  );
};

export default App;
