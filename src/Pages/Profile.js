import {  Button, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../Config/axiosConfig";
import "../index.css";
import { deleteUser } from "../Redux/services/Apis";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Profile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    navigate(`edituser/${id}`);
  };

  return (
    <div className="box">
      <h2>Profile</h2>
      <div className="header">
        <Grid item xs={12}>
          <Item>
            <img src={`${IMAGE_URL}${user?.photo}`} alt="x" style={{borderRadius:"50px", height:"250px", width:"250px"}} />
            <Typography textAlign="center">{user?.name}</Typography>
          </Item>
          <Item>
            <Button
              textAlign="center"
              onClick={() => handleEdit(user?._id)}
            >
              Edit profile
            </Button><br></br>
            <Button onClick={() => handleDelete(user._id)}>
              Delete Account
            </Button>
          </Item>
        </Grid>
      </div>
    </div>
  );
}

export default Profile;
