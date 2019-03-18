import React from "react";
//import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Student from "./addStudent";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ flex: 1 }}>
            Ingenius Prep Student App
          </Typography>
          <Student />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
