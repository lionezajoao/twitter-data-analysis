from flask import Flask, request

from backend.src.auth import Auth
from backend.src.controller import Controller

class Routes():

    def __init__(self):
        self.app = Flask(__name__)
        self.controller = Controller(Auth())

    def routes(self):
        @self.app.route('/', methods=['POST'])
        def get_data():
            self.controller.get_tweets(request.body)


if __name__ == "__main__":
    Routes().app.run()