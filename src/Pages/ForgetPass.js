import React, { useState } from "react";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { reqPasswordOtp } from "../Redux/services/Apis";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import {
	
	Form,

	
} from "react-bootstrap";

function ForgetPass() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 550,
    margin: "20px auto",
    borderRadius:"20px" 
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const dispatch = useDispatch();
  const { forgetPasswordStatus, forgetPasswordError, token } = useSelector((state) => state.auth);
  //console.log(auth)

  const [user, setUser] = useState({

    email: "",

  });

  const {email} =user
  console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reqPasswordOtp(user));
  };

  const handleOnChange = e => {
    const { value } = e.target;
    setUser(value);
};
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Forget Pass !!<Avatar style={avatarStyle}></Avatar></h2>
            <ToastContainer>{toast(token.message)}</ToastContainer>
            <div style={{ color: "red" }}>{token.messages}</div>
          </Grid>
          <form className="styleform" onSubmit={handleSubmit}>
            <label className="form-label">Name</label>
            

            {/* <label className="form-label">Email</label> */}
          <Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
            
            <Button variant="contained" color="success" type="submit">
              {forgetPasswordStatus === "pending" ? "Submitting..." : "forgetPassword"}
            </Button>
            {forgetPasswordStatus === "rejected" ? <p>{forgetPasswordError}</p> : null}
            
            <Typography>
              Do you have an account ?
              <Link to={"/signin"}>
                <Button color="secondary">SignIn</Button>
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default ForgetPass;
