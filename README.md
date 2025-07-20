# Stock Sentiment Dashboard

A React + Flask-based web application to analyze the sentiment of news headlines related to a given stock ticker symbol.

## Features

- Input a stock ticker (e.g., TSLA, AAPL)
- Fetch real-time news headlines using a backend API
- Analyze each headline for sentiment (Positive, Negative, Neutral)
- Display a sentiment summary and related headlines

## Tech Stack

- **Frontend**: React (JavaScript)
- **Backend**: Flask (Python)
- **Sentiment Analysis**: OpenAI GPT-4 API (or alternative)

---

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.x and pip

---

### Clone the Repository

```bash
git clone https://github.com/your-username/stock-sentiment-dashboard.git
cd stock-sentiment-dashboard
```
---

### SetupFrontend

cd frontend
npm install
npm start
Runs on: http://localhost:3000

### Setup Backend

cd backend
pip install -r requirements.txt
python app.py

###File Structure

stock-sentiment-dashboard/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── App.js
│   └── ...
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── ...
│
└── README.md
