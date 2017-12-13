import React, {Component} from "react";
import ReactDOM from "react-dom";
import {browserHistory} from "react-router";
import {Form, FormGroup, FormControl, Col, ControlLabel, Button} from "react-bootstrap";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        let email = ReactDOM.findDOMNode(this.refs.email).value;
        let password = ReactDOM.findDOMNode(this.refs.password).value;
        browserHistory.replace('/admin-store');
    }

    render() {
        return (
            <div>
                <Form horizontal onSubmit={this.onSubmit}>
                    <FormGroup className="text-center login-logo" >
                        <img src='./assets/images/logo.png' alt="logo" />
                    </FormGroup>
                    <FormGroup className="text-center">
                        <h3>Log In</h3>
                    </FormGroup>
                    <FormGroup controlId="useremail">
                        <Col componentClass={ControlLabel} sm={3}>
                            Email
                        </Col>
                        <Col sm={6}>
                            <FormControl type="email" name="email" placeholder="sam@es.com" required
                                         ref="email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <Col componentClass={ControlLabel} sm={3}>
                            Password
                        </Col>
                        <Col sm={6}>
                            <FormControl type="password" name="password" placeholder="password" required
                                         ref="password"/>
                        </Col>
                    </FormGroup>

                    <FormGroup className="text-center">
                        <Button className="btn-info" type="submit">
                            Log In
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default LoginForm;
