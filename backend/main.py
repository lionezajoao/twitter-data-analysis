from flask import Flask, request

from src.auth import Auth
from src.controller import Controller

app = Flask(__name__)

@app.route('/', methods=['POST'])
def get_data():
    return Controller(Auth().get_auth()).get_tweets(request.get_json())

if __name__ == "__main__":
    app.run(host='http://[::1]', port=4040)