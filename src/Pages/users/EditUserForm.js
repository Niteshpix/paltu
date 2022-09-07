import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useEffect, useState } from "react";
import "../index.css";
import { Link, useParams,} from "react-router-dom";
import { EditUser, getProfile } from "../../Redux/services/Apis";
import { useDispatch } from "react-redux";

function EditUserForm() {
  const dispatch =useDispatch()
  const {id}= useParams();
  const [editUser,setEditUser] = useState({
    name: "",
    email: "",
  });
  console.log(editUser, "------------")

  const {email,name}=editUser
  const onInputChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  
  const updateContent = () => {
    dispatch(EditUser({ id: editUser.id, data: editUser }))
      .unwrap()
      .then((response) => {
      })
      .catch((e) => {
        console.log(e);
      });
  };
 

  return (
    <div className="box">
      <Link to={"/user"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "45  vh" }}>
          <form onSubmit={updateContent}>
            <h1>Edit User</h1>
            <Grid container Spacing={5}>
              <Grid item sm={12}>
                <Typography variant="caption">Name</Typography>
                <TextField
                  fullWidth
                  placeholder=" Name"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                />
                <Typography variant="caption">Email</Typography>
                <TextField
                  fullWidth
                  placeholder=" Email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
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
