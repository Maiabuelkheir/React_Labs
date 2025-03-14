import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

export const Header = () => {
  return (
    <Navbar style={{ backgroundColor: "#4B000F" }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{color:"#000"}}>Myportfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


