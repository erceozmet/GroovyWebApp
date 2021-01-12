
import './App.css';
import React, {useState} from 'react'
import ShopList from './Pages/ShopList';
import NavBar from './NavBar';
import Login from './Pages/Login.js';
import SignUp from './Pages/SignUp.js';

import StickyFooter from './StickyFooter.js';
import Landing from './Pages/Landing.js'
import Settings from './Pages/Settings.js'
import AboutUs from './Pages/AboutUs.js'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

class App extends React.Component {

	constructor(){
		super()
		this.state = {

		}
	}


	render(){
		return(
			<>
				<Router>

				<NavBar/>
				
				<div className="justify">
				<Switch>
					<Route exact path="/"><Landing/></Route>
					<Route path="/Settings"><Settings/></Route>
					<Route path="/AboutUs"><AboutUs/></Route>
					<Route path="/Login"><Login/></Route>
					<Route path="/ShopList"><ShopList/></Route>
					<Route path="/SignUp"><SignUp/></Route>
					
				</Switch>
				</div>
				
				<StickyFooter />
			</Router>

			</>
			

			
			
		)
	}
}

export default App;
