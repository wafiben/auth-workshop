import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CutomButton from "../../Button/Button";
import { useSelector } from "react-redux";

function CustomNavbar() {
  const { user, isAuth } = useSelector((state) => state.AuthReducer);
  const token = localStorage.getItem("token");
  console.log(user);

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav
          className="me-auto"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {isAuth || token ? (
            <>
              <CutomButton action="logout" variant="danger" />
              {user.role === 1 && (
                <CutomButton action="admin" variant="primary" />
              )}
              <CutomButton action="add" variant="primary" />
              <CutomButton action="my-posts" variant="primary" />
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
