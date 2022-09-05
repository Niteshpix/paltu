import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import ReactFacebookLogin from "react-facebook-login";
import { loginUser } from "../Redux/services/Apis";

const clientId =
  "841234692619-eodv19gt1gc623779q5ghr2rd2klh2f2.apps.googleusercontent.com";

const SigninSchema = Yup.object().shape({
  password: Yup.string("Enter your password")
    .min(5, "Password should be of minimum 5 characters length")
    .required("Password is required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
});

function SignIn() {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 550,
    borderRadius: "20px",
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginStatus } = useSelector((state) => state.auth);

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const handleSubmit = () => {
    dispatch(loginUser(user));
    navigate("/dashboard");


  };

  const HandleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    //console.log("success:", res.profileObj);

    navigate("/dashboard");
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const responseFacebook = (response) => {
    console.log(response);
    // setData(response);
    // setPicture(response.picture.data.url);
    // if (response.accessToken) {
    //   setLogin(true);
    // } else {
    //   setLogin(false);
    // }
  };

  const forgetpass = () => {
    navigate("/forget-password");
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>
              SignIn !!<Avatar style={avatarStyle}></Avatar>
            </h2>
            <div style={{ marginTop: "12px" }}>
              <ReactFacebookLogin
                appId="1098101744147998"
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook"
              />
            </div>

            <h3>or</h3>
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={false}
            />
          </Grid>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SigninSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="styleform" onChange={HandleChange}>
                <label className="form-label">Email</label>
                {errors.email && touched.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}
                <Field
                  type="email"
                  placeholder="email"
                  name="email"
                  value={email}
                />

                <label className="form-label">Password</label>
                {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}
                <Field
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                />

                <Button variant="contained" color="success" type="submit">
                  {loginStatus === "pending" ? "Submitting..." : "Login"}
                </Button>

                <br></br>
                <Button onClick={forgetpass}>Forgot password ?</Button>

                <Typography>
                  Do you have No account ?
                  <Link to={"/signup"}>
                    <Button color="inherit">SignUp</Button>
                  </Link>
                </Typography>
              </Form>
            )}
          </Formik>

          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Forgot your passsword
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Enter the email associated with your account and we'll send an email to reset your password.
              </Typography>
             
              <TextField sx={{ mt: 2 }} id="outlined-basic" label="Enter Your Email" variant="outlined" />
              <Button style={{borderRadius:"20px",marginTop:"8px", marginRight:"200px"}} variant="contained">Send !!</Button>

            </Box>
          </Modal>*/}
        </Paper>
      </Grid>
    </div>
  );
}

export default SignIn;
