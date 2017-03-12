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
	      	{ Meteor.userId() ? <NavItem href='/challenges'>Challenges</NavItem> : null }
			<NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
		      { !Meteor.userId() &&  FlowRouter.getRouteName() == "students.new" ? <MenuItem eventKey={3.1} href="/login">Login</MenuItem> : null }
		      { !Meteor.userId() &&  FlowRouter.getRouteName() == "users.new" ? <MenuItem eventKey={3.2} href="/">Signup</MenuItem> : null }
		      { Meteor.userId() ? <MenuItem eventKey={3.3} href="/update">Update Email</MenuItem> : null }
			  { Meteor.userId() ? <MenuItem eventKey={3.3} href="/students/new">Create Student</MenuItem> : null }
			  { Meteor.userId() ? <MenuItem eventKey={3.3} href="/logout">Logout</MenuItem> : null }
			</NavDropdown>
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