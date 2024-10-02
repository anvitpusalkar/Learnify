import os
import google.generativeai as genai
from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# Configure Gemini API
genai.configure(api_key="")

# Configure YouTube API Key
YOUTUBE_API_KEY = ''

# Route to render homepage
@app.route('/')
def index():
    return render_template('index.html')

# Generate a weekly course with YouTube videos
@app.route('/generate-course', methods=['POST'])
def generate_course():
    data = request.get_json()
    prompt = data.get('prompt')

    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    # Call the Gemini API to generate weekly topics
    model = genai.GenerativeModel("gemini-1.5-flash")
    course_weeks = []

    # Define prompt for weekly plan generation
    full_prompt = f"Generate a weekly learning plan for {prompt} with detailed topics for each week for a 4-week course."

    response = model.generate_content(full_prompt)
    weeks_content = response.text.split("Week")
    
    # Start from 1 as Week 0 will be empty or intro text
    for i in range(1, len(weeks_content)):
        week_title = f"Week {i}"
        week_details = weeks_content[i].strip()
        videos = fetch_youtube_videos(f"{prompt} {week_title}")
        course_weeks.append({'week': week_title, 'details': week_details, 'videos': videos})

    return jsonify({'weeks': course_weeks})

# Fetch relevant YouTube videos based on topic
def fetch_youtube_videos(query):
    url = 'https://www.googleapis.com/youtube/v3/search'
    params = {
        'part': 'snippet',
        'q': query,
        'key': YOUTUBE_API_KEY,
        'type': 'video',
        'maxResults': 3
    }

    response = requests.get(url, params=params)
    video_data = response.json()

    videos = []
    for item in video_data.get('items', []):
        video = {
            'title': item['snippet']['title'],
            'videoId': item['id']['videoId'],
            'thumbnail': item['snippet']['thumbnails']['high']['url']
        }
        videos.append(video)
    
    return videos

if __name__ == '__main__':
    app.run(debug=True)
