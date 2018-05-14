from flask import Flask, jsonify, request, abort
import json


app = Flask(__name__)

@app.route('/')
def hello_world():
    return jsonify('Hello, World!')

@app.route('/options')
def get_options():
    with open('data.json') as f:
        data = json.load(f)
        return jsonify([{"clients": item["name"], "systems": [x["name"] for x in item["system"]]} for item in data])

@app.route('/connect')
def connect():
    try:
        if request.args.get("client") and request.args.get("system"):
            with open('data.json') as f:
                data = json.load(f)
                client = [client for client in data if client["name"] == request.args.get("client")][0]
                system = [system for system in client["system"] if system["name"] == request.args.get("system")][0]
                return jsonify(system["transaction_info"])
        else:
            abort(500)
    except IndexError:
        abort(500)

@app.route("/transactions", methods=['POST'])
def execute_transactions():
    if request.method == 'POST':
        return jsonify(request.json)

if __name__ == '__main__':
    app.run(debug=True)