import React, { useState } from 'react';
import './Search.css'; 
function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-container">
    <input
      className="search-input"
      type="text"
      placeholder="Search by name..."
      value={searchTerm}
      onChange={handleSearch}
    />
  </div>
  
  );
}

export default Search;
