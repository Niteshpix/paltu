import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState } from "react";
import "../index.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VerifiedAccount } from "../../Redux/services/Apis";


function VerifiedAccounts() {
    const [verified, setVerified]=useState({
        email:"",
        code:"",
    })
const dispatch =useDispatch()
    const handleChange=(e)=>{
        setVerified({
            ...verified,
            [e.target.name]: e.target.value,
        }
           
        )
    }
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(VerifiedAccount(verified))
   
}

const handleNavigate=()=>{
    Navigate("/signin")
}
  return (
    <div className="box">
      <Link to={"/profile"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "45vh" }}>
          <form  onSubmit={handleSubmit}>
            <h1>Verified Account</h1>
            <Grid container>
              <Grid item sm={12}>
                <Typography variant="caption">Email</Typography>
                <TextField
                  fullWidth
                  placeholder="email"
                  name="email"
                  value={verified.name}
             
                   onChange={handleChange}
                />
                <Typography variant="caption">code</Typography>
                <TextField
                  fullWidth
                  placeholder="code"
                  name="code"
                  value={verified.code}
                  onChange={handleChange}
                />

               
              </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "15px" }}>
              <Button
                size="large"
                color="secondary"
                type="submit"
                variant="contained"
                onClick={handleNavigate}
              >
                Update
               
              </Button>
            </Grid>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default VerifiedAccounts;
