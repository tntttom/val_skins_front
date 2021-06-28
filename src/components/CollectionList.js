import React, { useState } from "react";

import { Link } from "@reach/router";

export default (props) => {
  const [collectionList, setCollectionList] = useState(props.collections);

  return (
    <>
      {collectionList.map((collection, index) => (
        <Link
          className="collection-list-item"
          to={`/collections/${collection._id}`}
        >
          <h3>{collection.name}</h3>
        </Link>
      ))}
    </>
  );
};
