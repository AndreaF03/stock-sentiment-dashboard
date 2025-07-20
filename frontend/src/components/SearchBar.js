import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [symbol, setSymbol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbol) onSearch(symbol);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Stock Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
