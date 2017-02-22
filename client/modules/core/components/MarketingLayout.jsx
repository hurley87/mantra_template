import React from 'react';
import{ Grid, Row, Col, PageHeader, Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

const Layout = ({content}) => (
  	<div>
	  <Navbar>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="/">pttrns</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	      { Meteor.userId() ? <NavItem href="/logout">Logout</NavItem> : null }
	      { !Meteor.userId() &&  FlowRouter.getRouteName() == "students.new" ? <NavItem href="/login">Login</NavItem> : null }
	      { !Meteor.userId() &&  FlowRouter.getRouteName() == "users.new" ? <NavItem href="/">Signup</NavItem> : null }

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