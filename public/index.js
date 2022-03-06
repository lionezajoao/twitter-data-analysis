import { Repository } from '../src/repository/repository.js'

const start = async () => {

  const client = Repository.getClient();
  Repository.createTextOnlyTweet(client, 'test')
  const data = await Repository.searchRecentTweets(client, 'bitcoin');
  console.log(data.data)
};

start()