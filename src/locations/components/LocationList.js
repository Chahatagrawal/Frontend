import React from "react";

import "./LocationList.css";
import LocationItem from "./LocationItem";

const LocationList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h1>No Locations found</h1>
      </div>
    );
  }
  return (
    <ul className="locationlist">
      {props.items.map((location) => {
        return (
          <LocationItem
            key={location.id}
            id={location.id}
            pic={location.pic}
            title={location.title}
            desc={location.desc}
            address={location.address}
            userid={location.userid}
          />
        );
      })}
    </ul>
  );
};

export default LocationList;
