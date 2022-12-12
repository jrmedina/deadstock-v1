import { formatData } from "../utils/formatData";

const fetchData = async (type) => {
  try {
    // ` http://localhost:3001/api/${type}`
    // `https://deadstock-api.vercel.app/api/${type}`
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
    // ` http://localhost:3001/api/${type}`
    // `https://deadstock-api.vercel.app/api/${type}`
    const response = await fetch(`http://localhost:3001/api/inventory/${id}`);
    const json = await response.json();
     const data = formatData(json);
     console.log(data);
     
    return data;
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
    console.log(data);

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

export { fetchData, postData, deleteData, putData, fetchPair };
