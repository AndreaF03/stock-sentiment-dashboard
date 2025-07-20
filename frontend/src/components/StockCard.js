import React from "react";

const StockCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="stock-card">
      <h2>{data.symbol}</h2>
      <p>Price: ${data.price}</p>
      <p>Change: {data.change} ({data.changePercent}%)</p>
    </div>
  );
};

export default StockCard;
