
import './App.css';
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Button, NavDropdown, Form, Nav, FormControl} from 'react-bootstrap';


class NavBar extends React.Component{
    constructor(){
		super()
		this.state = {
			isLogged: false
		}
	}

	componentDidMount(){
		//Implement cookie login log out
	}

	render(){
		this.log = this.state.isLogged ? "out": "in"
	
  	return (
		<div>
		
		<Navbar bg="dark" variant="dark">
		
		<Navbar.Brand href="/">Groovy</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="mr-auto">

			<NavDropdown bg= 'primary' id="basic-nav-dropdown">
				<NavDropdown.Item href="/Login" >Log {this.log}</NavDropdown.Item>
				<NavDropdown.Item href = "/AboutUs">About Us</NavDropdown.Item>
				<NavDropdown.Item href = "/ShopList">Shop Now</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="/Settings">Settings</NavDropdown.Item>
			</NavDropdown>
			</Nav>
			<Form inline>
			<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			<Button variant="outline-light">Search</Button>
			</Form>
		</Navbar.Collapse>
	
  		</Navbar>
		</div>

      );
    }
}

export default NavBar