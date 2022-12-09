const fetchData = async (type) => {
  try {
    //https://deadstock-api.vercel.app/
    const response = await fetch(` http://localhost:3001/api/${type}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export { fetchData }
