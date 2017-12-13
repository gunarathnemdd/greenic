import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReallySmoothScroll from "really-smooth-scroll";
import App from './App';
import LandingPage from './components/landing_page/LandingPage';
import AboutUs from './components/about_us/AboutUs';
import OurServices from './components/our_services/OurServices';
import Home from './components/home/Home';
import Store from './components/store/Store';
import {AccountPage} from './components/account/AccountPage';
import AdminStore from './components/admin/AdminStore';

//ReallySmoothScroll.shim();

export default (
	<Route path="/"component={App}>
		<IndexRoute component={LandingPage} />
		<Route component={Home}>
			<Route path="about-us" component={AboutUs} />
			<Route path="our-services" component={OurServices} />
			<Route path="store" component={Store} />
		</Route>
		<Route path="admin-store" component={AdminStore}/>
		<Route path="/:component" component={AccountPage} />
	</Route>
)