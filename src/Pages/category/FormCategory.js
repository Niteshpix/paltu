import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../Redux/services/Apis";

function FormCategory() {
  const dispatch = useDispatch();
  const { items: category } = useSelector((state) => state);
  console.log(category);

  const [categry, setCategory] = useState({
    title: "",
    photo: "",
  });

  console.log(categry);

  const HandleChange = (e) => {
    setCategory({
      ...categry,
      [e.target.name]: e.target.value,
    });
  };

  const { title, photo } = categry;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory(categry));
    alert("Category Added");
  };

  return (
    <div className="category">
      <Link to={"/category"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "30vh" }}>
          <form onSubmit={handleSubmit} onChange={HandleChange}>
            <h1>Form Category</h1>
            <Grid>
              <Grid item sm={12}>
                <Typography variant="caption">Category</Typography>
                <TextField
                  fullWidth
                  placeholder="Category"
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
                //disabled={loadingSubmit}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default FormCategory;
