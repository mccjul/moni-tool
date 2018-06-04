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
        if request.args.get("client") and request.args.get("system") and request.args.get("clientnum") and request.args.get("username") and request.args.get("password"):
            # print(request.args.get("clientnum")  + " " + request.args.get("username")  + " " +  request.args.get("password"))
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
        if request.args.get("client") and request.args.get("system"):
            string_data = request.data.decode('utf8').replace("'", '"')
            data = json.loads(string_data)
            return jsonify(data)
        else:
            abort(500)

if __name__ == '__main__':
    app.run(debug=True)