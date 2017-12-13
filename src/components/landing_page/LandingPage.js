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
import FrontStore from '../store/FrontStore';
import "./LandingPage.css";

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
        this.focusDiv = this.focusDiv.bind(this);
        this.aboutUsPage = this.aboutUsPage.bind(this);
        this.contactUsFormObj = {
            email: null,
            name: null,
            message: null
        };
    }

    signup(event) {
        event.preventDefault();
        this.contactUsFormObj.email = ReactDOM.findDOMNode(this.refs.email).value;
        this.contactUsFormObj.name = ReactDOM.findDOMNode(this.refs.name).value;
        this.contactUsFormObj.message = ReactDOM.findDOMNode(this.refs.message).value;
    }

    focusDiv(refDom) {
        ReactDOM.findDOMNode(this.refs[refDom]).scrollIntoView();
    }

    openLink(url) {
        window.open(url);//TODO: added as a hotfix since NavItem can not open non self url
    }

    aboutUsPage() {
        browserHistory.replace('/about-us');
    }

    render() {
        return (
            <div className="landing">
                <Navbar collapseOnSelect fixedTop id="navbar" fluid>
                    <Navbar.Header>
                        <Navbar.Brand id="navbarText" href="#theme">
                            <a href="#theme"><Image id="navImage" src='assets/images/GreEnic_Logo2.png' alt="Gre Enic" 
                                    onClick={this.focusDiv.bind(this, "themeDiv")}/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href="#aboutUs" eventKey={1} onClick={this.focusDiv.bind(this, "aboutUsDiv")}
                                     id="navbarText">About Us</NavItem>
                            <NavItem href="#ourServices" eventKey={2} onClick={this.focusDiv.bind(this, "ourServicesDev")}
                                     id="navbarText">Our Services</NavItem>
                            <NavItem href="#store" eventKey={3} onClick={this.focusDiv.bind(this, "storeDev")}
                                     id="navbarText">Store</NavItem>
                            <NavItem href="#contactUs" eventKey={4} onClick={this.focusDiv.bind(this, "contactUsDev")}
                                     id="navbarText">Contact Us</NavItem>
                        </Nav>

                        <Nav pullRight>
                            <LinkContainer to="/login">
                                <NavItem eventKey={3} id="navbarText">Log In</NavItem>
                            </LinkContainer>
                            {/*<NavItem href="#signup" eventKey={4} onClick={this.focusDiv.bind(this, "contactUsDev")}
                                     id="navbarText"><Button bsStyle="info" bsSize="small"
                                                             className="nav-button button-flat">Contact Us</Button></NavItem>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <div>
                    <div id="theme" className="section text-center imageDiv" ref="themeDiv" style={{backgroundImage: 'url(/assets/images/picture7.jpg)'}}>
                        <Col id="queto" xs={12} md={8} style={{backgroundColor: '#f5f5f5'}}>
                                <h3 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa.</h3>    
                        </Col>
                    </div>
                    
                    <div id="aboutUs" className="section text-center imageDiv" ref="aboutUsDiv" style={{backgroundColor: '#eeeeee'}}>
                        <h3 className="description">About Us</h3>
                        <Row className="service">
                            <Col xs={12} md={6}>
                                <Image src="/assets/images/picture8.png" alt={"picture8"} responsive/>
                            </Col>
                            <Col xs={12} md={6} className="text-justify aboutUsDescription" style={{float: "right"}}>
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa. Donec sagittis, nulla et consequat tincidunt, sapien odio posuere magna, ac fermentum metus lacus ut dui. Quisque euismod bibendum molestie. Vestibulum purus lacus, cursus ut diam eu, molestie ultrices diam. Curabitur molestie nisl non vulputate tristique. Phasellus purus elit, sodales a elementum et, laoreet quis purus. Sed ultricies felis ultricies dui lacinia condimentum. Nullam eros dui, dictum ut sem at, lacinia ornare nulla. Cras tristique malesuada enim, at pellentesque diam.</p>    
                                {/*<Button bsStyle="info" bsSize="small" className="nav-button button-flat"
                                    onClick={this.aboutUsPage}>Learn More</Button>*/}
                                <p><Link to={'/about-us'}>Learn More</Link></p>
                            </Col>
                        </Row>
                    </div>

                    <div id="ourServices" className="section text-center imageDiv" ref="ourServicesDev" style={{backgroundImage: 'url(/assets/images/picture3.jpg)'}}>
                        <h3 className="text-center">Our Services</h3>
                        <Row className="service">
                            <Col xs={12} md={4} className="text-justify">
                                <div className="parent">
                                    <div className="child bg-one">
                                        <p className="serviceDescription"><strong className="text-center">Service 1</strong><br/><br/> consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa.
                                        <br/>
                                        <Link to={'/our-services'}>Learn More</Link>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="text-justify">
                                <div className="parent">
                                    <div className="child bg-two">
                                        <p className="serviceDescription"><strong className="text-center">Service 2</strong><br/><br/> consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa.
                                        <br/>
                                        <Link to={'/our-services'}>Learn More</Link>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4} className="text-justify">
                                <div className="parent">
                                    <div className="child bg-three">
                                        <p className="serviceDescription"><strong className="text-center">Service 3</strong><br/><br/> consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa.
                                        <br/>
                                        <Link to={'/our-services'}>Learn More</Link>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
                    <div id="store" className="section text-center imageDiv" ref="storeDev" style={{backgroundColor: '#eeeeee'}}>
                        <h3 className="text-center">Our Store</h3>
                        <FrontStore />
                        <br/>
                        <Link to={'/store'}>Learn More</Link>
                    </div>
                    
                    
                </div>
                    
                <footer className="footer">
                <div id="contactUs" className="section container" ref="contactUsDev" >
                        <Row>
                            <Col xs={12} md={6} className="text-center social-bar verticleLine">
                                <h3 className="text-center">Subscribe Us</h3>
                                <div className="social-bar-icon">
                                    <Row id="social-row">
                                        <Col className="social-icon" xs={12} md={4}>
                                            <a href="#" target="_blank"><Image src="./assets/images/facebook.png"/></a>
                                        </Col>
                                        <Col className="social-icon" xs={12} md={4}>
                                            <a href="#" target="_blank"><Image src="./assets/images/twitter.png"/></a>
                                        </Col>
                                        <Col className="social-icon" xs={12} md={4}>
                                            <a href="#" target="_blank"><Image src="./assets/images/google-plus.png"/></a>
                                        </Col>
                                    </Row>
                                    <Row id="contact-detais">
                                        <a href="tel:94702109146"><Glyphicon glyph="earphone"/>&nbsp;&nbsp;+94702109146</a>&nbsp;&nbsp;Sachintha<br/><br/>
                                        <a href="tel:94713864409"><Glyphicon glyph="earphone"/>&nbsp;&nbsp;+94713864409</a>&nbsp;&nbsp;Asiri<br/><br/>
                                        <a href="email:info@greenic.com"><Glyphicon glyph="envelope"/>&nbsp;&nbsp;info@greenic.com</a>
                                    </Row>
                                </div>
                                {/*<div id="contactUsImage"><Image src="/assets/images/picture1.jpg" height={250} alt="picture1" circle/></div>*/}
                            </Col>
                            <Col xs={12} md={6}>
                                <h3 className="text-center">Leave a Message</h3>
                                <Panel id="panel">
                                    <Form onSubmit={this.signup}>
                                        <FormGroup controlId="name">
                                            <ControlLabel>Name&nbsp;*</ControlLabel>
                                            <FormControl type="text" placeholder="Frank Vickers" required ref="name"/>
                                        </FormGroup>

                                        <FormGroup controlId="email">
                                            <ControlLabel>Email&nbsp;*</ControlLabel>
                                            <FormControl type="email" placeholder="frank@vickers.com" required ref="email"/>
                                        </FormGroup>

                                        <FormGroup controlId="message">
                                            <ControlLabel>Message</ControlLabel>
                                            <FormControl type="text" placeholder="Your message" ref="message"/>
                                        </FormGroup>
                                        
                                        <FormGroup className="text-center">
                                            <Button className="btn-info button-flat signup-button" type="submit">Send</Button>
                                        </FormGroup>
                                    </Form>
                                </Panel>
                            </Col>
                        </Row>
                    </div>
                    <div className="contact-info">
                        {/*<Row>
                            <Col sm={12} xs={12} className="text-center">
                                <p>Want to discuss more? Contact us.
                                    <br/>
                                    <a href="tel:94702109146"><Glyphicon glyph="earphone"/>&nbsp;&nbsp;+94702109146</a>&nbsp;&nbsp;Sachintha&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="tel:94713864409"><Glyphicon glyph="earphone"/>&nbsp;&nbsp;+94713864409</a>&nbsp;&nbsp;Asiri&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="email:info@greenic.com"><Glyphicon glyph="envelope"/>&nbsp;&nbsp;info@greenic.com</a>
                                </p>
                            </Col>
                        </Row>*/}
                        <Row>
                            <Col sm={12} md={6} className="text-left">
                                <p className="company-info">Website Designed by <a href="email:gunarathnemdd@gmail.com">gunarathnemdd@gmail.com</a></p>
                            </Col>

                            <Col sm={12} md={6} className="text-right">
                                <p className="company-info">Copyright © 2017. Gre Enic. All Rights Reserved.</p>
                            </Col>
                        </Row>
                    </div>
                </footer>
            </div>
        );
    }
}
export default LandingPage;