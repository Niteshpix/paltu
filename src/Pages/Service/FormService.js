import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState } from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { createServices } from "../../Redux/services/Apis";
import { useNavigate } from "react-router-dom";

function FormCategory() {
  const dispatch = useDispatch();
  const [service, setService] = useState({
    title: "",
    photo: "",
    description:"",
    titleColor:""
  });

  //console.log(categry);

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const { title, description, titleColor } = service;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createServices(service));
    navigate("/services")
    //console.log(categry)
  };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/services");
  };

  return (
    <div className="box">
      <ReplyAllIcon onClick={routeChange} />

      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "50vh" }}>
          <form onSubmit={handleSubmit}>
            <h1>Add services</h1>
            <Grid item sm={12}>
              <Typography variant="caption">title</Typography>
              <TextField
                fullWidth
                placeholder="title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item sm={12}>
              <Typography variant="caption">description</Typography>
              <TextField
                fullWidth
                placeholder="description"
                name="description"
                value={description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item sm={12}>
              <Typography variant="caption">TitleColor</Typography>
              <TextField
                fullWidth
                placeholder="titleColor"
                name="titleColor"
                value={titleColor}
               onChange={handleChange}
              />
            </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
              <input
                type="file"
                alt="Submit"
                name="photo"
                onChange={(e) => setService({ ...service, photo: e.target.files[0]})}
              />
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

export default FormCategory;
