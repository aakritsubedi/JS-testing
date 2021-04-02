const axios = require('axios');

const fetchUser = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    const user = await axios.get(url);
    
    return user.data;
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = fetchUser;
