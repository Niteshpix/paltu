import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  createServices } from "../../Redux/services/Apis";

function FormService() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [services, setSevices] = useState({
    title: "",
    photo: "",
    titleColor:"",
    description:""
  });

  const HandleChange = (e) => {
    setSevices({
      ...services,
      [e.target.name]: e.target.value,
      
    });
  };

  const handleImageChange=(e)=>{
    setSevices({
      ...services,
      [e.target.name]: e.target.files[0],
      
    });
  }

  const { title, photo, description, titleColor } = services;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createServices(services));
    navigate("/services");
  };

  return (
    <div className="box">
      <Link to={"/services"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "60vh" }}>
          <form onSubmit={handleSubmit} >
            <h1>Add Service</h1>
            <Grid>
              <Grid item sm={12}>
                <Typography variant="caption" onChange={HandleChange}>Services</Typography>
                <TextField
                  fullWidth
                  placeholder="Service"
                  name="title"
                  value={title}
                />
                <Typography variant="caption" onChange={HandleChange}>Description</Typography>
                <TextField
                  fullWidth
                  placeholder="Description"
                  name="description"
                  value={description}
                />
                <Typography variant="caption" onChange={HandleChange}>Title Color</Typography>
                <TextField
                  fullWidth
                  placeholder="color"
                  name="titleColor"
                  value={titleColor}
                />
              </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
              <input type="file" alt="Submit" name="photo" value={photo} onChange={handleImageChange} />

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
