# AI-Powered-Feature

## Feature Overview
This project extends a media tracker web application by adding an AI-powered feature that automatically generates tags for each media item. When a user adds a new item (such as a movie or book), the app sends the title and notes to a local language model, which returns 3–5 relevant tags. These tags are then stored with the item and displayed in the UI.

This feature demonstrates how a real application can integrate an LLM API to enhance user input with intelligent, generated data.

## API / Service Used
This feature uses a local LLM API provided by Ollama.

- Tool: Ollama
- Model: gemma4:e2b
- Type: Local API (runs on localhost, no API key required)

Ollama runs a language model directly on your machine and exposes an API similar to cloud-based services, allowing the app to send requests and receive generated responses.

## How It Works
1. User submits a media item with a title and optional notes
2. The app calls a helper function (generateTags)
3. A POST request is sent to the local Ollama API
4. The model returns 3–5 comma-separated tags
5. The tags are stored with the media item in localStorage
6. The tags are displayed in the UI

## Setup Instructions

1. Install Ollama from https://ollama.com/download

2. Pull the model by running:
ollama pull gemma4:e2b

3. Start the model:
ollama run gemma4:e2b
Leave this running in the background while using the app.

4. Run the React app:
npm install
npm run dev

5. Open your browser to http://localhost:5173/

## Usage
- Add a new media item using the form
- After submission, the app will automatically generate tags
- Tags will appear under each media item

## Notes / Limitations
- The model runs locally, so performance depends on your machine
- Tag quality may vary depending on the input text
- The feature requires Ollama to be running; otherwise, tag generation will fail silently and the item will still be saved

## Summary
This feature demonstrates how to integrate an LLM API into a real web application by making a POST request, handling asynchronous responses, and incorporating AI-generated data into the user interface.
