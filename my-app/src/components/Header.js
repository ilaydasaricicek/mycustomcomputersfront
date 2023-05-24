import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";




const Header = () => {


  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ background: "#8B1874", color: "white" ,marginBottom:"3rem"}}
      variant="dark"
    >
      <Container>
        <Navbar.Brand  style={{ color: "white" }} href="/">
          <b>MyCustomComputers</b> 
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
