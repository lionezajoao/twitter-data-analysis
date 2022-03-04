import { Repository } from '../src/repository/repository.js'

const start = async () => {

  const client = Repository.getClient();
  
  const user = await Repository.getUserIdFromUsername(client, 'k004l4');
  console.log(user);
  // const data = await Repository.searchRecentTweets(client, 'bitcoin');
  // console.log(data)
};

start()