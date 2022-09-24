const fetchData = async (type) => {
  try {
    const response = await fetch(`http://localhost:3001${type}`);
    const json = await response.json();
return json
  
  } catch (error) {
    console.log("error", error);
  }
};

export { fetchData };
