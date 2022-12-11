import { formatData } from "../utils/formatData";

const fetchData = async (type) => {
  try {
    // ` http://localhost:3001/api/${type}`
    // `https://deadstock-api.vercel.app/api/${type}`
    const response = await fetch(`https://deadstock-api.vercel.app/api/${type}`);
    const json = await response.json();
    const data =
      type === "inventory" ? json.data.map((data) => formatData(data)) : json;

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

const postData = async (newPost) => {
  return fetch("https://deadstock-api.vercel.app/api/inventory", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  // if (post.ok) {
  //   return post.json();
  // } else {
  //   throw Error(post.status.Text);
  // }
  // })
  // .catch((error) => console.log(error));
}




export { fetchData, postData };
