import React, { useState } from "react";

export default (props) => {
  const [skinList, setSkinList] = useState(props.skins);

  return (
    <div>
      {skinList.map((skin, index) => (
        <li>{skin.name}</li>
      ))}
    </div>
  );
};
