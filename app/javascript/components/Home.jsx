import React from "react";
import authenticationApi from "../apis/authentication";
import { useNavigate } from "react-router-dom";
import List from "./referrals/List";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authenticationApi.logout();
    navigate("/");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ flex: 1 }}>
            Referrals App
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <List />
    </div>
  );
};
