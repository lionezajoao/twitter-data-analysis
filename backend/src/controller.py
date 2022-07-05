from backend.src import actions

class Controller(object):

    def __init__(self, client):
        self.client = client

    def get_tweets(self, body):

        response = {}

        term = body.get('term')
        payload = {
            'lang': body.get('lang'),
            'result_type': body.get('result_type'),
            'count': body.get('count')
        }
        
        tweet_list = actions.get_tweets(term=term, client=self.client, **payload)
        for tweet in tweet_list:
            treated_tweet = tweet._json

            response[treated_tweet['id']] = treated_tweet

        return response