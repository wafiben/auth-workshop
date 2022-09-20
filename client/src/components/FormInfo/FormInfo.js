import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { login, register } from "./../../Redux/actions/AuthActions/authAction";
import { useNavigate } from "react-router-dom";

function FormInfo({ commandType }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.password !== confirmedPassword) {
      alert("password mismatch");
    } else {
      if (commandType === "signin") {
        dispatch(login(userInfo, navigate));
      } else {
        dispatch(register(userInfo, navigate));
      }
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      {commandType === "register" && (
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>userName</Form.Label>
          <Form.Control
            type="text"
            placeholder="userName"
            name="userName"
            onChange={handleChange}
            value={userInfo.userName}
          />
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={userInfo.email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={userInfo.password}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmedPassword">
        <Form.Label>ConfirmedPassword</Form.Label>
        <Form.Control
          type="password"
          placeholder="confirmedPassword"
          name="confirmedPassword"
          onChange={(e) => setConfirmedPassword(e.target.value)}
          value={confirmedPassword}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormInfo;
