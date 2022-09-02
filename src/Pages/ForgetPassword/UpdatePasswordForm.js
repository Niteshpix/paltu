import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../Redux/Action/passwordAction";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";

const initialState = {
  code: "",
  password: "",
  email: "",
};
const passVerificationError = {
  isLenthy: false,
  hasUpper: false,
  hasLower: false,
  hasNumber: false,
  hasSpclChr: false,
  confirmPass: false,
};

const UpdatePasswordForm = () => {
  const dispatch = useDispatch();

  const [newPassword, setNewPassword] = useState(initialState);
  const [passwordError, setPasswordError] = useState(passVerificationError);

  const { isLoading, status, message } = useSelector(
    (state) => state.passwordReset
  );

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewPassword({ ...newPassword, [name]: value });

    if (name === "password") {
      setPasswordError({
        ...passwordError,
        confirmPass: newPassword.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(newUser);

    const { code, password, email } = newPassword;

    const newPassObj = {
      code,
      newPassword: password,
      email,
    };
    dispatch(updatePassword(newPassObj));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info">Update Password</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
          {isLoading && <Spinner variant="primary" animation="border" />}
        </Col>
      </Row>

      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={newPassword.email}
                onChange={handleOnChange}
                placeholder="email"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newPassword.password}
                onChange={handleOnChange}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="text"
                name="code"
                value={newPassword.code}
                onChange={handleOnChange}
                placeholder="OTP"
                required
              />
            </Form.Group>

            <Form.Text>
              {/* {!passwordError.confirmPass && (
								<div className="text-danger mb-3">Password doesn't match!</div>
							)} */}
            </Form.Text>

            <Button
              variant="primary"
              type="submit"
              // disabled={Object.values(passwordError).includes(false)}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdatePasswordForm;
