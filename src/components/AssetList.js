import React from "react";

const AssetList = ({ assets, onDownload }) => {
  if (assets.length === 0) {
    return <p>No assets found.</p>;
  }

  return (
    <div>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id}>
            <span>{asset.name}</span>
            <span> (Project: {asset.project})</span>
            <button onClick={() => onDownload(asset.id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetList;
