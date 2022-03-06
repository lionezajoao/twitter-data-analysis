import {TwitterApi} from 'twitter-api-v2';
import {config} from 'dotenv';
config({path: './.env'})

export class Repository {

    static getClient = () => {
        return new TwitterApi({
            appKey: process.env.API_KEY,
            appSecret: process.env.API_SECRET,
            accessToken: process.env.ACCESS_TOKEN,
            accessSecret: process.env.ACCESS_TOKEN_SECRET
        });
      };
    
    static getUserData = async (client, username) => {
        return await client.v2.userByUsername(username);
    };
      
    static getUserIdFromUsername = async (client, username) => {
        const data = await this.getUserData(client, username);
        return data.data.id;
    }

    static getUserTimelineWithoutReplies = async (client, username) => {
        const userId = await this.getUserIdFromUsername(client, username);
        try {
            const result = await client.v2.userTimeline(userId, {exclude: 'replies'});
            return result.data;
        } catch (e) {
            throw new Error({e});
        }
    }

    static createTextOnlyTweet = async (client, text) => {
        await client.v1.tweet(text);
    }
    static searchRecentTweets = async (client, term) => {
        return await client.v2.search(term);
    };

}