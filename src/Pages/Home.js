import React from "react";
import "./index.css";
import { Button, Grid, Paper, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SignIn from "./SignIn";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "80vh",
  borderRadius: "20px",
  boxShadow: "24px",
}));

function Home() {
  return (
    <>
  
      <Box sx={{ flexGrow: 1, padding: "20px" , margin:"auto"}}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <div className="">
                <img src={require("../Assest/P.png")} alt="" />
                <img src={require("../Assest/altu.png")} alt="" />
              </div>
              <div className="banner">
                <h1>Care they need, Love they deserve💕</h1>
                <img src={require("../Assest/front.PNG")} alt="" />
                <h1>Welcome to Paltu</h1>
                <p>
                  All types of services for your pet in one place, instantly
                  searchable.
                </p>
                <Link style={{ textDecoration: "none" }} to={"/signup"}>
                  <Button
                    style={{ borderRadius: "20px" }}
                    size="large"
                    variant="contained"
                  >
                    GetStarted !!
                  </Button>
                </Link>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4} >
            <SignIn />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
