// NPM Imports
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
// Local Imports

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
          <NavbarBrand className="mr-auto">CalPal</NavbarBrand>
          <NavbarToggler
            onClick={this.toggleNavbar}
            className="mr-2 bg-light"
          />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/foods">Foods</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
