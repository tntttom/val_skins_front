import React, { useEffect, useState } from "react";
import axios from "axios";

export default (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const onSubmitCollection = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/collections/new", {
        name,
        price,
        releaseDate,
      })
      .then((res) => {
        console.log(res.data);
        setName("");
        setPrice("");
        setReleaseDate("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: "50%", margin: "50px auto" }}>
      <h1>Add a Collection</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={onSubmitCollection}
      >
        <div style={{ margin: "1rem 0" }}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ margin: "1rem 0" }}>
          <input
            type="text"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div style={{ margin: "1rem 0" }}>
          <input
            type="text"
            value={releaseDate}
            placeholder="Relase Date"
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>

        <input
          style={{ width: "25%", marginTop: "1rem" }}
          type="submit"
          value="Create"
        />
      </form>
    </div>
  );
};
