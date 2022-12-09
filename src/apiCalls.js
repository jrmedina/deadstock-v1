const fetchData = async (type) => {
  try {
    //https://deadstock-api.vercel.app/
    const response = await fetch(
      `https://deadstock-api.vercel.app/api/${type}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export { fetchData }
