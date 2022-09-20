import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CutomButton from "../../Button/Button";
import { useSelector } from "react-redux";

function CustomNavbar() {
  const connected = useSelector((state) => state.AuthReducer.isAuth);
  const token = localStorage.getItem("token");

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav
          className="me-auto"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {connected ? (
            <>
              <CutomButton action="logout" variant="danger" />
              <CutomButton action="admin" />
            </>
          ) : (
            <CutomButton action="sign-in" />
          )}

          <CutomButton action="home" />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
