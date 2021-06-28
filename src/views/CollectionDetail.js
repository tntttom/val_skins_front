import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import img from "../assets/images/oni_shorty.png";

import axios from "axios";

export default (props) => {
  const [collection, setCollection] = useState({});
  const [collectionList, setCollectionList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/collections/${props.id}`)
      .then((res) => {
        setCollection(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/skins/collections/${props.id}`)
      .then((res) => {
        setCollectionList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(img);
  return (
    <div className="collectionDetails">
      <div className="collectionDetails-header">
        <h1>{collection.name}</h1>
        <p className="collectionDetails-price">Price: {collection.price} VP</p>
        <p className="collectionDetails-release">
          Release Date: {collection.releaseDate}
        </p>
      </div>

      <div className="collectionDetails-list">
        {collectionList.map((skin) => (
          <div className="collectionDetails-skin">
            <h3>{skin.weapon}</h3>
            <img src={skin.imgUrl} />
          </div>
        ))}
      </div>

      <div className="collectionDetails-addSkin">
        <Link to={`/collections/${props.id}/add`}>
          <button>Add a Skin</button>
        </Link>
      </div>
    </div>
  );
};
