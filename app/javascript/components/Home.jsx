import React from "react";
import authenticationApi from "../apis/authentication";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authenticationApi.logout();
    navigate("/");
  };

  return (
    <div>
      This is home page!
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
};
