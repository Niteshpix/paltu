import React from "react";
import "./index.css";
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="welcome">
        <img src={require("../Assest/P.png")} alt="" />
        <img src={require("../Assest/altu.png")} alt="" />
      </div>
      <div className="banner">
        <h1>Care they need, Love they deserve💕</h1>
        <img src={require("../Assest/front.PNG")} alt="" />
        <h1>Welcome to Paltu</h1>
        <p>All types of services for your pet in one place, instantly searchable.</p>
        <Link style={{textDecoration: 'none'}} to={"/signup"}>
        <Button style={{borderRadius:"20px"}} size="large" variant="contained">GetStarted !!</Button>

        </Link>
      </div>

    </>
  );
}

export default Home;
