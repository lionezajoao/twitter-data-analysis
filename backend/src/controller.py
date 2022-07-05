from backend.src import actions

class Controller(object):

    def __init__(self, client):
        self.client = client

    def get_tweets(self, body):

        term = body.get('term')
        payload = {
            'lang': body.get('lang'),
            'result_type': body.get('result_type'),
            'count': body.get('count')
        }
        
        response = actions.get_tweets(term, self.client, payload)
        for tweet in response:
            print(tweet)
            print('-'*30)

        return body