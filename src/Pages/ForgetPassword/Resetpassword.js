import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetOtp } from "../../Redux/Action/passwordAction";
import {Link, useNavigate} from 'react-router-dom'
import "../index.css"
import { Alert, Card, Grid, TextField, Typography } from "@mui/material";
import { Button, Spinner } from "react-bootstrap";
import ReplyAll from "@mui/icons-material/ReplyAll";


const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");

  const { isLoading, status, message } = useSelector(
    (state) => state.passwordReset
  );

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    dispatch(sendPasswordResetOtp(email));
	navigate("/otp")
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
	<div className="forgot">
	<Link to={"/"}>
	  <ReplyAll />
	</Link>
	<div className="header">
	  <Card style={{ padding: "20px", width: "100%", height: "30vh" }}>
		<form onSubmit={handleOnResetSubmit}>
		  <h1>forgot Your Password</h1>
		  {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
          {isLoading && <Spinner variant="primary" animation="border" />}
		  <Typography variant="caption">Email Address</Typography>
            <TextField
              fullWidth
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Email"
              required
            />

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
    // <Container className="box">
    //   <Row className="header">
    //     <Col>
    //       <h1 className="text-info text-center">Reset Password</h1>
    //       <hr />

    //       {message && (
    //         <Alert variant={status === "success" ? "success" : "danger"}>
    //           {message}
    //         </Alert>
    //       )}

    //       {isLoading && <Spinner variant="primary" animation="border" />}

    //       <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
    //         <Form.Group>
    //           <Form.Label>Email Address</Form.Label>
    //           <Form.Control
    //             type="email"
    //             name="email"
    //             value={email}
    //             onChange={handleOnChange}
    //             placeholder="Enter Email"
    //             required
    //           />
    //         </Form.Group>

    //         <Button type="submit">Reset Password</Button>
    //       </Form>
    //       <hr />
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default ResetPassword;
