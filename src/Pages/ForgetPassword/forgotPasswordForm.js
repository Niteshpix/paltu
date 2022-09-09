import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../Redux/Action/passwordAction";
import "../index.css";
import { Button, Card } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

const UpdatePasswordForm = () => {
  const dispatch = useDispatch();

  const [newPassword, setNewPassword] = useState({
    code: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value,
    });
  };


  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePassword(newPassword));
    Navigate("/")
  };

  return (
    <div className="forgot">
      <Link to={"/forget-password"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "45vh" }}>
          <form onSubmit={handleOnSubmit}>
            <h1>follow credentials</h1>
            <Grid container>
              <Grid item sm={12}>
                <Typography variant="caption">Email</Typography>
                <TextField
                  fullWidth
                  placeholder="Email"
                  name="email"
                  value={newPassword?.email}
                  onChange={handleChange}
                />
                <Typography variant="caption">New Password</Typography>
                <TextField
                  fullWidth
                  placeholder="New Password"
                  name="password"
                  value={newPassword?.password}
                  onChange={handleChange}
                />

                <Typography variant="caption">Otp</Typography>
                <TextField
                  fullWidth
                  placeholder="code"
                  name="code"
                  value={newPassword?.code}
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
              >
                submit
              </Button>
            </Grid>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default UpdatePasswordForm;
