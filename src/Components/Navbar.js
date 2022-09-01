import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar >
          <Link style={{ textDecoration: "none", color:"white" }} to={"/"}>
            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
              Paltu
            </Typography>
            </Link>
            <Link style={{ textDecoration: "none",  }} to={"/signin"}>
              <Button color="secondary">SignIn</Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/signup"}>
              <Button color="secondary">SignUp</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
