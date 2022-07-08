from flask import Flask, request
from dotenv import load_dotenv
load_dotenv()

from src.auth import Auth
from src.controller import Controller
from src.utils import Utils

app = Flask(__name__)

@app.route('/', methods=['POST'])
def get_data():
    return Controller(Auth().get_auth()).get_tweets(request.get_json())

if __name__ == "__main__":
    app.run(
        host=Utils().host,
        port=Utils().port,
        debug=Utils().debug_lvl
        )