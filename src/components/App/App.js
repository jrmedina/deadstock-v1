import PostForm from "../user components/PostForm/PostForm";
import SearchResults from "../SearchResults/SearchResults";
import Hero from "../Hero/Hero";
import UserCloset from "../user components/UserCloset/UserCloset";
import React, { useState, useEffect } from "react";
import Login from "../user components/Login/Login";
import { Route, Switch } from "react-router-dom";
import DetailedView from "../DetailedView/DetailedView";
import ListView from "../ListView/ListView";
import { fetchData } from "../../utils/apiCalls";
import NavigationBar from "../NavigationBar/NavigationBar";
import Error from "../Error/Error";
import "./App.css";

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState();
  const [users, setUsers] = useState([]);
  const [closet, setCloset] = useState({});

  useEffect(() => {
    fetchData("inventory").then((data) => setInventory(data));
    fetchData("users").then((response) => setUsers(response.data));
  }, []);

  const handleSearch = (input) => {
    const normalizedInput = input.toLowerCase();
    const matchingResults = inventory.reduce((acc, shoe) => {
      const { title, brand, colors, size } = shoe;
      const matchesTitle = title.toLowerCase().includes(normalizedInput);
      const matchesBrand = brand.toLowerCase().includes(normalizedInput);
      const matchesSize = size.toString() === normalizedInput;
      const matchesColor = colors.toLowerCase().includes(normalizedInput);
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
    setCloset({
      username: user.username,
      contact: closet[0].contact,
      closet: closet,
    });
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
      (s) => s.id !== Number(e.target.id)
    );
    setInventory(filteredInventory);
    const updatedCloset = closet.closet.filter(
      // eslint-disable-next-line
      (s) => s.id != Number(e.target.id)
    );
    setCloset({ ...closet, closet: updatedCloset });
  };

  const logout = () => {
    setCloset({});
  };

  const homeView = search ? (
    <SearchResults query={search} />
  ) : (
    <Hero inventory={inventory} />
  );

  return (
    <main className="App">
      <NavigationBar
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
            <UserCloset
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
          render={() => (
            <PostForm
              addPost={addPost}
              user={closet.username}
              contact={closet.contact}
            />
          )}
        />
        <Route exact path="/all" render={() => <ListView all={inventory} />} />
        <Route
          exact
          path="/inventory/:id"
          render={({ match }) => {
            const pair = inventory.find(
              (s) => s.id === Number(match.params.id)
            );
            return <DetailedView pair={pair} />;
          }}
        />
        <Route exact path="/" render={() => homeView} />
        <Route path="*" render={() => <Error />} />
      </Switch>
    </main>
  );
};

export default App;
