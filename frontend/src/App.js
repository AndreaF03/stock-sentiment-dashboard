import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import StockCard from "./components/StockCard";
import SentimentChart from "./components/SentimentChart";
import NewsList from "./components/NewsList";
import "./App.css";

function App() {
  const [symbol, setSymbol] = useState("");
  const [newsData, setNewsData] = useState(null);

  const fetchSentiment = async (symbol) => {
    try {
      const res = await fetch("http://localhost:5000/api/sentiment", {
        method: "POST", // or GET, depending on how you modify the backend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symbol }),
      });

      const data = await res.json();
      console.log("API Response:", data);
      setNewsData(data);
      setSymbol(symbol);
    } catch (error) {
      console.error("Error fetching sentiment:", error);
    }
  };

  return (
    <div className="App">
      <h2>Stock Sentiment Dashboard</h2>
      <SearchBar onSearch={fetchSentiment} />

      {newsData && (
  <>
    <StockCard symbol={symbol} sentiment={newsData.summary} />
    <SentimentChart sentiment={newsData.summary} />
    <NewsList news={newsData.details} />
  </>
)}

    </div>
  );
}

export default App;
