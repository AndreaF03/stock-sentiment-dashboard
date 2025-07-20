import React from "react";

const NewsList = ({ news }) => {
  if (!news || news.length === 0) {
    return <p>No news found.</p>;
  }

  return (
    <div>
      <h3>Related News</h3>
      <ul>
        {news.map((item, index) => (
          <li key={index}>
            <strong>{item.sentiment.toUpperCase()}:</strong> {item.headline}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
