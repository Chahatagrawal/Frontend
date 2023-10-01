import React from "react";

import "./LocationItem.css";
const LocationItem = (props) => {
  return (
    <li className="locationitem">
      <div className="locationitem-content">
        <div className="locationitem-pic">
          <img src={props.pic} alt={props.title} />
        </div>
        <div className="locationitem-infor">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.desc}</p>
        </div>
        <div className="locationitem-action">
          <button>X</button>
        </div>
      </div>
    </li>
  );
};

export default LocationItem;
