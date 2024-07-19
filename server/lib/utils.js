const axios = require("axios");

module.exports = async function getQuote() {
  const options = {
    method: "GET",
    url: "https://thought-of-the-day.p.rapidapi.com/thought",
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
