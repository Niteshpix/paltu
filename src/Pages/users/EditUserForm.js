import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function EditUserForm() {
  const { user } = useSelector((state) => state.profile);
  console.log(user, "================");


  const [editUser, setEditUser] = useState();
  console.log(editUser);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditUser({ ...editUser, [name]: value });
  };

  return (
    <div className="Edit User">
      <Link to={"/user"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "45  vh" }}>
          <form>
            <h1>Edit User</h1>
            <Grid container Spacing={5}>
              <Grid item sm={12}>
                <Typography variant="caption">Name</Typography>
                <TextField
                  fullWidth
                  placeholder=" Name"
                  name="name"
                  value={''}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item sx={{ marginTop: "100px" }}></Grid>
            <Button
              size="large"
              color="secondary"
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default EditUserForm;
