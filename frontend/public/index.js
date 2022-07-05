import { Repository } from '../src/repository/repository.js'

const start = async () => {

  const tweetDate = new Date().toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const client = Repository.getClient();
  // Repository.createTextOnlyTweet(client, `teste ${tweetDate}`)
  const data = await Repository.searchRecentTweets(client, 'bitcoin');
  const tweets = data._realData.data;
  // const data = await Repository.searchAllTweets(client, 'bitcoin')
  for (const idx in tweets) {
    console.log(tweets[idx]);
  }
};

start()