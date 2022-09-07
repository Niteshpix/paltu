import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  createServices } from "../../Redux/services/Apis";

function FormService() {
  const dispatch = useDispatch();
  const [services, setSevices] = useState({
    title: "",
    photo: "",
  });

  console.log(services);

  const HandleChange = (e) => {
    setSevices({
      ...services,
      [e.target.name]: e.target.value,
    });
  };

  const { title, photo } = services;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createServices(services));
    alert("Services Added");
  };

  return (
    <div className="box">
      <Link to={"/services"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "30vh" }}>
          <form onSubmit={handleSubmit} onChange={HandleChange}>
            <h1>Add Service</h1>
            <Grid>
              <Grid item sm={12}>
                <Typography variant="caption">Services</Typography>
                <TextField
                  fullWidth
                  placeholder="Service"
                  name="title"
                  value={title}
                />
              </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
              <input type="file" alt="Submit" name="photo" value={photo} />

              <Button
                size="large"
                color="secondary"
                type="submit"
                variant="contained"
              >
                Add
              </Button>
            </Grid>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default FormService;
