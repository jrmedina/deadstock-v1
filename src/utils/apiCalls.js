import { formatData } from "../utils/formatData";
    // ` http://localhost:3001/api/${type}`
    // `https://deadstock-api.vercel.app/api/${type}`

const fetchData = async (type) => {
  try {
    const response = await fetch(`http://localhost:3001/api/${type}`);
    const json = await response.json();
    const data =
      type === "inventory" ? json.data.map((data) => formatData(data)) : json;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchPair = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/api/inventory/${id}`);
    const json = await response.json();
    const data = formatData(json);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchUser = async (username, password) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/${username}/closet`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      }
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (newPost) => {
  try {
    const response = await fetch("http://localhost:3001/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });
    const json = await response.json();
    const data = json.updated.map((data) => formatData(data));

    return data;
  } catch (error) {
    console.log(error);
  }
};

const putData = async (newPost) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/inventory/${newPost.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      }
    );
    const json = await response.json();
    const data = json.updated.map((data) => formatData(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/api/inventory/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    const data = json.updated.map((data) => formatData(data));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchData, postData, deleteData, putData, fetchPair, fetchUser };
