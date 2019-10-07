import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

export const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home">Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
