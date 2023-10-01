import React from "react";
import { useParams } from "react-router-dom";

import LocationList from "../components/LocationList";

const USER_LOCATIONS = [
  {
    id: "loc1",
    title: "Taj Mahal",
    desc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/800px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg",
    address:
      "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India. ",
    userid: "user1",
  },
  {
    id: "loc2",
    title: "Red Fort",
    desc: "The Red Fort is a historic fort in the Old Delhi neighbourhood of Delhi, India, that historically served as the main residence of the Mughal emperors.",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/1200px-Delhi_fort.jpg",
    address: "Old Delhi, Delhi, India",
    userid: "user2",
  },
];
const UserLocation = () => {
  const userid = useParams().userid;
  const FILTERED_LOCATIONS = USER_LOCATIONS.filter(
    (location) => location.userid === userid
  );

  return <LocationList items={FILTERED_LOCATIONS} />;
};

export default UserLocation;
