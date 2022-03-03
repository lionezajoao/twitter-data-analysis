
const Login = require('./login');
require('dotenv').config({path: './.env'});

class Search {
  static searchUser = async (username) => {
    const client = Login.setTwitterApiClient();
    const user = await client.v2.userByUsername(username);
    return user;
  };

  static searchRecentTweets = async (term) => {
    const client = Login.setTwitterApiClient();
    const data = await client.v2.search(term);
    return data;
  };
}

module.exports = Search;
