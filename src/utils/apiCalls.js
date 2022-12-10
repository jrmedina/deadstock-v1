import {formatData} from "../utils/formatData"

const fetchData = async (type) => {
  try {
    //https://deadstock-api.vercel.app/
    const response = await fetch(` http://localhost:3001/api/${type}`);
    const json = await response.json();
    const data = type === 'inventory' ?  json.data.map(data => formatData(data)) : json

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export { fetchData }
