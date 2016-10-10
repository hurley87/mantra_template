import React from 'react';
import{ Grid, Row, Col, PageHeader, Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

const Layout = ({content}) => (
  	<div>
	  <Navbar inverse>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="http://pttrns.ca">pttrns</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	        <NavItem eventKey={1} href="#">Settings</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
		<div>
		{
  			content()
		}
		</div>
  	</div>

);

export default Layout;