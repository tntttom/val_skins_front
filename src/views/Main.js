import React, { useState, useEffect } from "react";
import axios from "axios";

import SkinList from "../components/SkinList";
import CollectionList from "../components/CollectionList";

export default () => {
  const [collectionList, setCollectionList] = useState([]);
  const [loadedCollections, setLoadedCollections] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/collections").then((res) => {
      setCollectionList(res.data);
      setLoadedCollections(true);
    });
  });

  return (
    <div className="main-container">
      <div className="collection-list-container">
        <h1>COLLECTIONS</h1>
        <div className="collection-list">
          {loadedCollections && <CollectionList collections={collectionList} />}
        </div>
      </div>
    </div>
  );
};
