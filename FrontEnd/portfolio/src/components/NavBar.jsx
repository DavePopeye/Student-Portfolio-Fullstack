import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../style/navBar.css";
import Logo from "../images/Logo.JPG";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="navBarStyle shadow">
        <Navbar.Brand href="/">
          <Image src={Logo} className="brand"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navBarStyle" href="/students">
              Students
            </Nav.Link>
            <Nav.Link className="navBarStyle" href="/project">
              Projects
            </Nav.Link>
            <Nav.Link className="navBarStyle" href="/about">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
