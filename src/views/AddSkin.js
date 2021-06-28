import React, { useState, useEffect } from "react";

import img from "../assets/images/oni_shorty.png";

import axios from "axios";

export default (props) => {
  const [name, setName] = useState("");
  const [weapon, setWeapon] = useState("");
  const [price, setPrice] = useState("");
  const [tier, setTier] = useState("");

  const onSubmitSkin = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/skins/new", {
        name,
        weapon,
        collectionName: props.id,
        price,
        tier,
        imgUrl: img,
      })
      .then((res) => {
        console.log(res.data);
        setName("");
        setWeapon("");
        setPrice("");
        setTier("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addSkin-container">
      <h1>Add Skin</h1>
      <form onSubmit={onSubmitSkin}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Weapon"
            value={weapon}
            onChange={(e) => setWeapon(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Tier"
            value={tier}
            onChange={(e) => setTier(e.target.value)}
          />
        </div>

        <button className="addSkin-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
