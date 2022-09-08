import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState } from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { createCategory } from "../../Redux/services/Apis";
import { useNavigate } from "react-router-dom";

function FormCategory() {
  const dispatch = useDispatch();
  const [categry, setCategory] = useState({
    title: "",
    photo: "",
  });

  console.log(categry)

  const handleChange = (e) => {
    setCategory({
      ...categry,
      [e.target.name]: e.target.value,
    });
  };

  const { title, photo } = categry;
  const handleSubmit = () => {
    dispatch(createCategory(categry));
    navigate("/category")
  };

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/category");
  };

  return (
    <div className="box">
      <ReplyAllIcon onClick={routeChange} />

      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "30vh" }}>
          <form onSubmit={handleSubmit}>
            <h1>Add Category</h1>
              <Grid item sm={12}>
                <Typography variant="caption">Category</Typography>
                <TextField
                  fullWidth
                  placeholder="Category"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </Grid>
            <Grid item sx={{ marginTop: "20px" }}>
              <input type="file" alt="Submit" name="photo" value={photo} onChange={handleChange}/>
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
