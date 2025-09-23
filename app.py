from flask import Flask, request, jsonify, render_template
from chatbot_model import generate_response

app = Flask(__name__, template_folder="web/templates", static_folder="web/static")

chat_history_ids = None  # store conversation history

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    global chat_history_ids
    data = request.json
    user_input = data.get("message", "").strip()
    if not user_input:
        return jsonify({"reply": "Please say something!"})

    response, chat_history_ids = generate_response(user_input, chat_history_ids)
    return jsonify({"reply": response})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
