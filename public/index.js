const Search = require('../src/search');
require('dotenv').config({path: './.env'});

const user = async () => {
  const user = await Search.searchUser();
  console.log(user);
  const data = await Search.searchRecentTweets();
  console.log(data)
};