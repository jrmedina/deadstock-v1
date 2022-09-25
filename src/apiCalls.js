const fetchData = async (type) => {
  try {
    const response = await fetch(
      `https://deadstock-api.herokuapp.com/api${type}`
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export { fetchData };
