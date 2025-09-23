# Chatbot Assistant

A simple web-based chatbot powered by [Flask](https://flask.palletsprojects.com/) and [DialoGPT](https://huggingface.co/microsoft/DialoGPT-medium).

## Features

- Conversational AI using Microsoft DialoGPT-medium
- Web interface for chatting
- Persistent chat history per session

## Setup Instructions

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd Chatbot-Assistant
```

### 2. Install dependencies

Make sure you have Python 3.8+ installed.

```sh
pip install -r requirements.txt
```

### 3. Run the application

```sh
python app.py
```

The server will start at [http://localhost:5000](http://localhost:5000).

### 4. Chat with the bot

Open your browser and go to [http://localhost:5000](http://localhost:5000).  
Type your message and interact with the chatbot!

## Project Structure

```
app.py
chatbot_model.py
requirements.txt
web/
  static/
    chat.js
  templates/
    index.html
```

- `app.py`: Flask web server
- `chatbot_model.py`: Loads the DialoGPT model and handles response generation
- `web/templates/index.html`: Web UI
- `web/static/chat.js`: (Unused) Example JS for alternate chat UI

## Notes

- The first run may take time to download the model.
- For production, set `debug=False` in `app.py`.

## License

MIT License