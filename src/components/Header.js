import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap/'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/favorite">Favorite</Nav.Link>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>                
            </Navbar>
                
            </div>
        )
    }
}

export default Header
