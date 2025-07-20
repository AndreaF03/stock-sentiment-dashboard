import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, BarElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale);

const SentimentChart = ({ sentiment }) => {
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Sentiment Score",
        data: [
          sentiment.positive || 0,
          sentiment.neutral || 0,
          sentiment.negative || 0,
        ],
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        precision: 0,
      },
    },
  };

  return (
    <div>
      <h3>Sentiment Summary</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SentimentChart;
