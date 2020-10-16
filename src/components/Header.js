import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <div className="header">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="../../public/index.html">Gempel & Co.</Navbar.Brand>
                <Nav classname="mr-auto">
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Registration</Nav.Link>
                    <Nav.Link href="#">Login</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Logged in as: %username%
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header