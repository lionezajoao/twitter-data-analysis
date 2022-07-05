def get_tweets(term:str, client, **kwargs):

    lang = kwargs.get('lang')
    result_type = kwargs.get('result_type')
    count = kwargs.get('count')
    return client.search_tweets(q=term, lang=lang, result_type=result_type, count=count)
