import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions";
import "./index.css";

const Login = ({ isLoggedIn, error, signIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <div className="login-form">
      {isLoggedIn && <Redirect to="/home" />}
      <Form>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={e => {
              setUsername(e.target.value);
              if (!e.target.value) {
                setUsernameError("Please Input Username");
              } else {
                setUsernameError("");
              }
            }}
            value={username}
          />
        </Form.Group>

        {usernameError && <Alert variant="danger">{usernameError}</Alert>}

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => {
              setPassword(e.target.value);
              if (!e.target.value) {
                setPasswordError("Please Input password");
              } else {
                setPasswordError("");
              }
            }}
          />
        </Form.Group>
        {passwordError && <Alert variant="danger">{passwordError}</Alert>}

        <Button
          variant="primary"
          type="button"
          onClick={() => {
            if (!username) {
              setUsernameError("Please Input Username");
            }
            if (!password) {
              setPasswordError("Please Input password");
            }
            if (username && password) {
              signIn(username, password);
            }
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = { signIn };

const mapStatesToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  error: state.auth.error
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(Login);
