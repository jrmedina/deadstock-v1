import PostForm from "../user components/PostForm/PostForm";
import SearchResults from "../SearchResults/SearchResults";
import Hero from "../Hero/Hero";
import UserCloset from "../user components/UserCloset/UserCloset";
import React, { useState, useEffect } from "react";
import Login from "../user components/Login/Login";
import { Route, Switch } from "react-router-dom";
import DetailedView from "../DetailedView/DetailedView";
import ListView from "../ListView/ListView";
import {
  fetchData,
  postData,
  deleteData,
  putData,
  fetchUser,
} from "../../utils/apiCalls";
import NavigationBar from "../NavigationBar/NavigationBar";
import Error from "../Error/Error";
import "./App.css";
import Socials from "../Socials/Socials";

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState();
  const [closet, setCloset] = useState({});

  useEffect(() => {
    fetchData("inventory").then((data) => setInventory(data));
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
  const login = (username, password) => {
    fetchUser(username, password).then((data) => setCloset(data));
  };

  const addPost = (newPost) => {
    postData(newPost).then((data) => setInventory(data));
    setCloset({
      ...closet,
      closet: [...closet.closet, { ...newPost, user: newPost.user }],
    });
  };

  const updatePost = (post) => {
    putData(post).then((data) => setInventory(data));
  };

  const deletePost = (e) => {
    deleteData(e.target.id).then((data) => setInventory(data));
    const updatedCloset = closet.closet.filter(
      // eslint-disable-next-line
      (s) => s.id != Number(e.target.id)
    );
    setCloset({ ...closet, closet: updatedCloset });
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
        logout={setCloset}
        handleInput={handleSearch}
        setCloset={setCloset}
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
        <Route exact path="/login" render={() => <Login login={login} />} />
        <Route
          exact
          path="/createpost"
          render={() => <PostForm addPost={addPost} user={closet} />}
        />
        <Route exact path="/all" render={() => <ListView all={inventory} />} />
        <Route exact path="/inventory/:id" render={() => <DetailedView />} />
        <Route exact path="/" render={() => homeView} />
        <Route path="*" render={() => <Error />} />
      </Switch>
      <Socials />
    </main>
  );
};

export default App;
