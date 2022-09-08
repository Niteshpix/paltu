import React, { useState } from "react";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/services/Apis";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import axios from "axios";

function SignUp() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 550,
    margin: "20px auto",
    borderRadius: "20px",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { registerStatus, registerError, token } = useSelector(
    (state) => state.auth
  );
  //console.log(auth)

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    code:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  };

  
      const onVerify = async () => {
      try {
        await axios.post("verified-account",{
          name:user.name,
          email:user.email,
          code:user.code
        });
        <input
          type="text"
          placeholder="Code"
          onChange={(e) => setUser({ ...user, code: e.target.value })}
        />
      } catch (error) {
        alert(error);
      }
    };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>
              SignUp !!<Avatar style={avatarStyle}></Avatar>
            </h2>
            <ToastContainer>{toast(token?.message)}</ToastContainer>

            <div style={{ color: "red" }}>{token?.messages}</div>
          </Grid>
          <form className="styleform" onClick={onVerify} onSubmit={handleSubmit}>
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />

            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            

            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

          
            <Button variant="contained" color="success" type="submit" >
              {registerStatus === "pending" ? "Submitting..." : "Register"}
            </Button>
           
           
            {registerStatus === "rejected" ? <p>{registerError}</p> : null}
           
           
            <Typography>
              Forgot password ?
              <Link to={"/"}>
                <Button color="secondary">click</Button>
              </Link>
            </Typography>
            <Typography>
              Do you have an account ?
              <Link to={"/"}>
                <Button color="secondary">SignIn</Button>
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUp;
