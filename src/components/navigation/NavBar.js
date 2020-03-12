import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Rb from 'react-bootstrap';

function NavBar() {
    return (<Rb.Navbar bg="dark" variant="dark" expand="lg">
        <Rb.Navbar.Brand className="pl-5" href="#"> dapo-data </Rb.Navbar.Brand>
        <Rb.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Rb.Navbar.Collapse className="justify-content-end pr-5">
            <Rb.Nav.Link className="text-light" href="#"> Home </Rb.Nav.Link>
            <Rb.Nav.Link className="text-light" href="#"> Logout </Rb.Nav.Link>
        </Rb.Navbar.Collapse>
    </Rb.Navbar>);
}

export default NavBar;