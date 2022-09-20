const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3001");
    const json = await response.json();

    
    return json;
  } catch (error) {
    console.log("error", error);
  }
};

export { fetchData };
