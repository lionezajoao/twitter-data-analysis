import os
from dotenv import load_dotenv
load_dotenv()

class Utils:
    def __init__(self):
        self.host = os.environ.get('APP_HOST')
        self.port = os.environ.get('APP_PORT')
        self.debug_lvl = os.environ.get('FLASK_DEBUG')