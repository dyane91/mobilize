import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './nav-bar.css';

export default class NavBar extends Component {
    render() {
        return(
            <Navbar className="navbar">
              <Link to="/">
                <Navbar.Brand> <img src={require("../logo.jpg")} alt="logo" className="logo"/></Navbar.Brand>
              </Link>
            </Navbar>
        )
    }
}
