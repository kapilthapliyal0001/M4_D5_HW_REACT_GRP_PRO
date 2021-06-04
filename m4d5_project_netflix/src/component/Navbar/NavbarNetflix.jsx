import React from "react";
import "../Navbar/NavbarNetflix.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import * as Icon from "react-bootstrap-icons"
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const NavbarNetflix = () => (
  <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#141414" }}>
    <Navbar.Brand>
      <img
        src="./NavData/netflix_logo.png"
        height="50px"
        width="120px"
        alt="netflix logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto d-none d-sm-none d-md-none d-lg-flex">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">TV Shows</Nav.Link>
        <Nav.Link href="/">Movies</Nav.Link>
        <Nav.Link href="#home">Recently Added</Nav.Link>
        <Nav.Link href="#home">My List</Nav.Link>
      </Nav>

      <Nav className="ml-auto">
        {/* search icon, idk how to shoe it  */}
        {/* <Button variant="link">
          <Icon.BiSearch />
        </Button> */}

        <Nav.Link>KIDS</Nav.Link>
        <Dropdown drop="bottom" id="SearchDropDown">
          <Dropdown.Toggle>
            <img src="./NavData/avatar.png" width="32px" alt="Kids Avatar" />
          </Dropdown.Toggle>
          <Dropdown.Menu
            align="right"
            className="dropDown dropdown-menu"
            style={{ opacity: 0.8, backgroundColor: "#141414" }}
          >
            <Dropdown.Item className="text-white">Hedri</Dropdown.Item>
            <Dropdown.Item className="text-white">Ingrid</Dropdown.Item>
            <Dropdown.Item className="text-white">Janusz</Dropdown.Item>
            <Dropdown.Item className="text-white">Kapil</Dropdown.Item>
            <Dropdown.Item className="text-white">
              Manage Profiles
            </Dropdown.Item>
            <Dropdown.Item className="text-white font-weight-bold">
              Account
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-white font-weight-bold">
              <Nav.Link href="#">Sign out from Netflix</Nav.Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarNetflix;
