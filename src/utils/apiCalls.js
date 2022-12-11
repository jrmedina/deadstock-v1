import { formatData } from "../utils/formatData";

const fetchData = async (type) => {
  try {
    // ` http://localhost:3001/api/${type}`
    // `https://deadstock-api.vercel.app//api/${type}`
    const response = await fetch(
      `https://deadstock-api.vercel.app/api/${type}`
    );
    const json = await response.json();
    const data =
      type === "inventory" ? json.data.map((data) => formatData(data)) : json;

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { fetchData };
