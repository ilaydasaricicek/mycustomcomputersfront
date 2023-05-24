import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: "#8B1874", color: "white" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand  style={{ color: "white" }} href="/">
          <b>MyCustomComputers</b> 
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }} href="/register">
              Register
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
