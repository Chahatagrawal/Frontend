import React, { useEffect, useState } from "react";

import UserList from "../components/UserList";

const Users = () => {
  const [error, setError] = useState(null);
  const [savedusers, setSavedUsers] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setSavedUsers(responseData.message);
        console.log("user page response", responseData.message);
      } catch (err) {
        alert(err.message, () => {
          setError(null);
        });
        console.log(err);
        setError(err.message);
      }
    };
    sendRequest();
  }, []);

  return (
    <React.Fragment>
      {savedusers && <UserList items={savedusers} />};
    </React.Fragment>
  );
};

export default Users;
