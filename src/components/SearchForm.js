import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [projectQuery, setProjectQuery] = useState("");
  const [assetQuery, setAssetQuery] = useState("");

  const handleSearch = () => {
    onSearch(projectQuery, assetQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by project..."
        value={projectQuery}
        onChange={(e) => setProjectQuery(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by asset..."
        value={assetQuery}
        onChange={(e) => setAssetQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
