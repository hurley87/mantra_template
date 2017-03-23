import React from 'react';
import{ Grid, Row, Col, PageHeader, Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap';

const Layout = ({content}) => (
  	<div>
	  <Navbar>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="/about">pttrns</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	      	{ Meteor.userId() ? <NavItem href='/challenges'>Send a Challenge</NavItem> : null }
			{ Meteor.userId() ? 
				<NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
			      { !Meteor.userId() &&  FlowRouter.getRouteName() == "students.new" ? <MenuItem eventKey={3.1} href="/login">Login</MenuItem> : null }
			      { !Meteor.userId() &&  FlowRouter.getRouteName() == "users.new" ? <MenuItem eventKey={3.2} href="/">Signup</MenuItem> : null }
			      { Meteor.userId() ? <MenuItem eventKey={3.3} href="/about">How it Works</MenuItem> : null }
			      { Meteor.userId() ? <MenuItem eventKey={3.4} href="/update">Update Email</MenuItem> : null }
				  { Meteor.userId() ? <MenuItem eventKey={3.5} href="/students/new">Add Student</MenuItem> : null }
				  { Meteor.userId() ? <MenuItem eventKey={3.6} href="/logout">Logout</MenuItem> : null }
				</NavDropdown> : null
			}
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