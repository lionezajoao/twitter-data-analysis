const {TwitterApi} = require('twitter-api-v2');
require('dotenv').config({path: './.env'});

class Login {
  static setTwitterApiClient = () => {
    const client = new TwitterApi(process.env.BEARER_TOKEN);
    return client;
  };
}

module.exports = Login;