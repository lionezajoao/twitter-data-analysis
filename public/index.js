import { Repository } from '../src/repository/repository.js'

const start = async () => {

  const tweetDate = new Date().toLocaleDateString("pt-BR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const client = Repository.getClient();
  Repository.createTextOnlyTweet(client, `teste ${tweetDate}`)
};

start()