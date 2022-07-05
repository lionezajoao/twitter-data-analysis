import os
import tweepy
from dotenv import load_dotenv
load_dotenv()

class Auth:
    def __init__(self):
        self.api_key = os.environ.get('API_KEY')
        self.api_key_secret = os.environ.get('API_KEY_SECRET')
        self.access_token = os.environ.get('ACCESS_TOKEN')
        self.access_token_secret = os.environ.get('ACCESS_TOKEN_SECRET')

    def get_auth(self):
        # Authenticate to Twitter
        auth = tweepy.OAuthHandler(
            self.api_key,
            self.api_key_secret,
            access_token=self.access_token,
            access_token_secret=self.access_token_secret
        )
        return tweepy.API(auth)
