import React from "react";
import authenticationApi from "../apis/authentication";
import { useNavigate } from "react-router-dom";
import List from "./referrals/List";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
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
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
        <List />
    </div>
  );
};
