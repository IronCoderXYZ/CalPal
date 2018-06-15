// NPM Imports
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  Collapse,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';
// Local Imports
import Logo from './favicon.ico';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <div>
        <Navbar color="faded">
          <NavbarBrand className="mr-auto">
            <img alt="logo" src={Logo} height="30px" />
            CalPal
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2 bg-light">
            &#9776;
          </NavbarToggler>
          <Collapse
            navbar
            isOpen={!this.state.collapsed}
            className="text-center bg-warning"
          >
            <Nav navbar>
              <NavItem className="p-2">
                <Link to="/" onClick={() => this.setState({ collapsed: true })}>
                  &#x2764; Home
                </Link>
              </NavItem>
              <NavItem className="p-2">
                <Link
                  to="/foods"
                  onClick={() => this.setState({ collapsed: true })}
                >
                  &#9832; Foods
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
