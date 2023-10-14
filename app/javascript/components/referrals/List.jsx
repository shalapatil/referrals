import React from "react";

import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const List = () => {
  return (
    <React.Fragment>
      {/* Material App Bar */}

      {/* Material TextField */}
      <TextField id="name" label="Type here..." />

      {/* Material Button */}
      <Button variant="raised" color="primary" style={{ marginLeft: 10 }}>
        Material button
      </Button>
    </React.Fragment>
  );
};

export default List;
