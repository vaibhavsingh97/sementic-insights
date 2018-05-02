import boto3
import json
from flask import Flask, jsonify, abort, request
from flask_cors import CORS, cross_origin

application = Flask(__name__)
CORS(application)
comprehend = boto3.client(service_name='comprehend', region_name='us-east-1', aws_access_key_id='ACCESS_KEY',aws_secret_access_key='SECRET_KEY')


@application.route("/")
def hello():
    return json.dumps({"message": "hello World"})

@application.route('/language_detect',  methods=['POST'])
def language_detect():
    if not request.json or not 'message' in request.json:
        abort(400)
    message = request.json['message']
    return json.dumps(comprehend.detect_dominant_language(Text = message), sort_keys=True, indent=4), 201

@application.route('/named_entities',  methods=['POST'])
def named_entities():
    if not request.json or not 'message' in request.json:
        abort(400)
    message = request.json['message']
    return json.dumps(comprehend.detect_entities(Text=message, LanguageCode='en'), sort_keys=True, indent=4), 201

@application.route('/key_phrases',  methods=['POST'])
def key_phrases():
    if not request.json or not 'message' in request.json:
        abort(400)
    message = request.json['message']
    return json.dumps(comprehend.detect_key_phrases(Text=message, LanguageCode='en'), sort_keys=True, indent=4), 201

@application.route('/detect_sentiment',  methods=['POST'])
def detect_sentiment():
    if not request.json or not 'message' in request.json:
        abort(400)
    message = request.json['message']
    return json.dumps(comprehend.detect_sentiment(Text=message, LanguageCode='en'), sort_keys=True, indent=4), 201

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=8080, debug=True)
