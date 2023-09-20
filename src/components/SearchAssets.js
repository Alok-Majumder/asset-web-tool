import React, { useState } from "react";
import "./SearchAssets.css";

const SearchAssets = () => {
  const [assetId, setAssetId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [assetName, setAssetName] = useState("");

  const handleSearch = () => {
    // Implement your logic to fetch asset and project details based on the entered IDs
    // You can replace this with an actual API call
    // For demonstration purposes, we'll use hardcoded responses
    const assetDetails = {
      assetName: "Sample Asset",
      projectName: "Sample Project",
    };

    setAssetName(assetDetails.assetName);
    setProjectName(assetDetails.projectName);
  };

  const handleDownload = () => {
    // Implement the logic to initiate the download here
    // You can trigger a download or redirect to a download link
    alert(`Downloading ${assetName}`);
  };

  return (
    <div className="search-assets-container">
      <h1>Asset Search Tool</h1>
      <div className="search-section">
        <label>
          Project ID:
          <input
            className="input-field"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter Project ID"
          />
        </label>
        <label>
          Asset ID:
          <input
            className="input-field"
            type="text"
            value={assetId}
            onChange={(e) => setAssetId(e.target.value)}
            placeholder="Enter Asset ID"
          />
        </label>
        <button className="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {assetName && projectName && (
        <div className="result">
          <h3>Asset Details:</h3>
          <p>Asset Name: {assetName}</p>
          <p>Project Name: {projectName}</p>
          <button className="download-button" onClick={handleDownload}>
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchAssets;
