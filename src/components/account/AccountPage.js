import React, {Component} from "react";
import {Link, browserHistory} from "react-router";
import LoginForm from "./login/LoginForm";
import {Row, Col, Panel} from "react-bootstrap";

export class AccountPage extends Component {
    constructor() {
        super();
        this.state = {component: "login"};
    }

    componentDidMount() {
        // let component = this.props.params.component;
        // if (component === 'logout') {
        //     let started = localStorage.getItem('gettingStarted');
        //     localStorage.clear();
        //     localStorage.setItem('gettingStarted', started);
        //     window.Intercom('shutdown', {
        //         app_id: "sv5qstkh"
        //     });
        //     browserHistory.replace('/login');
        // } else if(localStorage.getItem("token")!==null) {
        //     browserHistory.replace('/dashboard');
        //     return null
        // }else {
        //     this.setState({component: component});
        // }
    }

    navigateTo(component) {
        this.setState({component: component});
        browserHistory.replace('/' + component);
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col lg={6} sm={8} xs={12} lgOffset={3} smOffset={2}>
                        <Panel>
                            {this.state.component === 'signup' ? (
                                <div><SignupForm/><h5 className="text-center"><Link
                                    onClick={this.navigateTo.bind(this, "login")}>Go to Log In</Link>
                                </h5></div>) : (
                                <div><LoginForm />{/*<h5 className="text-center"><Link
                                    onClick={this.navigateTo.bind(this, "signup")}>Create
                                    an account</Link></h5>*/}</div>)}
                        </Panel>
                    </Col>
                </Row>

            </div>
        );
    }
}
