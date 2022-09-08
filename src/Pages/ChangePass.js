import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../Redux/services/Apis";

function ChangePass() {

    const dispatch = useDispatch()
  const user = useSelector((state) => state.profile);
  const [change, setChange] = useState({
    currentPassword:user?.currentPassword,
    newPassword:user?.newPassword,
    verifyPassword:user?.verifyPassword,
  });

  const handleChange = (e) => {
    setChange({
      ...change,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changePassword(change));
  };

  return (
    <div className="box">
      <Link to={"/profile"}>
        <ReplyAllIcon />
      </Link>
      <div className="header">
        <Card style={{ padding: "20px", width: "100%", height: "45vh" }}>
          <form onSubmit={handleSubmit}>
            <h1>Change password</h1>
            <Grid container>
              <Grid item sm={12}>
                <Typography variant="caption">Current Password</Typography>
                <TextField
                  fullWidth
                  placeholder="Current Password"
                  name="currentPassword"
                  value={change?.currentPassword}
                  onChange={handleChange}
                />
                <Typography variant="caption">New Password</Typography>
                <TextField
                  fullWidth
                  placeholder="New Password"
                  name="newPassword"
                  value={change?.newPassword}
                  onChange={handleChange}
                />

                <Typography variant="caption">Verify Password</Typography>
                <TextField
                  fullWidth
                  placeholder="Verify Password"
                  name="verifyPassword"
                  value={change?.verifyPassword}
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
                Update
              </Button>
            </Grid>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default ChangePass;
