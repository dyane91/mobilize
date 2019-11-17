import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './nav-bar.css';

export class NavBar extends Component {
    render() {
        return(
            <Navbar className="navbar">
                <Navbar.Brand> eventS123</Navbar.Brand>
                <Nav>
                    <Nav.Link>Browse Events</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}