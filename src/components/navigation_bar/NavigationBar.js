import React, {Component} from "react";
import ReactDOM from "react-dom";
import {browserHistory, Link} from 'react-router';
import {LinkContainer} from "react-router-bootstrap";
import {
    Navbar,
    Nav,
    NavItem,
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    Panel,
    Image,
    Glyphicon,
    Carousel
} from "react-bootstrap";

class NavigationBar extends Component {

	constructor(props) {
        super(props);
        this.focusDiv = this.focusDiv.bind(this);
    }

    focusDiv(refDom) {
        //ReactDOM.findDOMNode(this.refs[refDom]).scrollIntoView();
        browserHistory.replace('/');
    }

	render() {
        return (
        	<div className="landing">
        		<Navbar collapseOnSelect fixedTop id="navbar" fluid>
                    <Navbar.Header>
                        <Navbar.Brand id="navbarText" href="#theme">
                            <a><Image id="navImage" src='assets/images/GreEnic_Logo2.png' alt="Gre Enic"
                                   onClick={this.focusDiv}/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} onClick={this.focusDiv}
                                     id="navbarText">Home</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/login">
                                <NavItem eventKey={3} id="navbarText">Log In</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        	</div>
        );
    }
}

export default NavigationBar;