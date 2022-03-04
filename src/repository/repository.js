import {TwitterApi} from 'twitter-api-v2';
import {config} from 'dotenv';
config({path: './.env'})

export class Repository {

    static getClient = () => {
        return new TwitterApi(process.env.BEARER_TOKEN);
      };
    
    static getUserData = async (client, username) => {
        return await client.v2.userByUsername(username);
    };
      
    static getUserIdFromUsername = async (client, username) => {
        const data = await this.getUserData(client, username);
        return data.data.id;
    }

    static searchRecentTweets = async (client, term) => {
        return await client.v2.search(term);
    };

}