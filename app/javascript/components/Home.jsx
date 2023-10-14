import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "./referrals/List";
import Navbar from "./Navbar";
import Login from "./Login";

export default () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("user") ? true : false);
  }, []);

  if (isLoggedIn) {
    return (
      <>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <List setIsLoggedIn={setIsLoggedIn} />
      </>
    );
  } else {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }
};
