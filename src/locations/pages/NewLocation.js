import React, { useContext, useState } from "react";

import { LoginContext } from "../../common/components/context";
import "./NewLocation.css";

const NewLocation = () => {
  const login = useContext(LoginContext);
  const [error, setError] = useState(null);
  const [newlocation, setnewlocation] = useState({
    title: "",
    desc: "",
    address: "",
  });

  const changeHandler = (event) => {
    const newValue = event.target.value;
    const inputname = event.target.name;

    setnewlocation((previousValue) => {
      if (inputname === "newlocationtitle") {
        return {
          title: newValue,
          desc: previousValue.desc,
          address: previousValue.address,
        };
      } else if (inputname === "newlocationdesc") {
        return {
          title: previousValue.title,
          desc: newValue,
          address: previousValue.address,
        };
      } else if (inputname === "newlocationaddress") {
        return {
          title: previousValue.title,
          desc: previousValue.desc,
          address: newValue,
        };
      }
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("new location page ", newlocation);
    try {
      const response = await fetch("http://localhost:5000/api/locations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: newlocation.title,
          desc: newlocation.desc,
          address: newlocation.address,
          userid: login.userID,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      console.log("new location page", responseData);
    } catch (err) {
      alert(err.message, () => {
        setError(null);
      });
      console.log(err);
      setError(err.message);
    }
  };
  return (
    <form className="location-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label>
          Title
          <input
            name="newlocationtitle"
            type="text"
            required
            onChange={changeHandler}
          />
        </label>
      </div>
      <div className="form-control">
        <label>
          Description
          <textarea
            name="newlocationdesc"
            rows="3"
            type="text"
            required
            onChange={changeHandler}
          />
        </label>
      </div>
      <div className="form-control">
        <label>
          Address
          <input
            name="newlocationaddress"
            type="text"
            required
            onChange={changeHandler}
          />
        </label>
      </div>
      <div className="form-control">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default NewLocation;
