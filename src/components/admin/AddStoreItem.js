import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Col,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
    Button,
    Modal,
    ModalBody,
    ModalHeader
} from 'react-bootstrap';

class AddStoreItem extends Component {

    constructor() {
        super();
        this.close = this.close.bind(this);
        this.requestCredits = this.requestCredits.bind(this);
    }

    close() {
        this.setState({showMoreCreditCtrl: false});
        this.props.onCloseCallback();
    }

    requestCredits(event) {
        let ctx = this;
        event.preventDefault();
        let name = ReactDOM.findDOMNode(this.refs.itemName).value;
        let price = ReactDOM.findDOMNode(this.refs.itemPrice).value;
        let quentity = ReactDOM.findDOMNode(this.refs.itemQuentity).value;
        let description = ReactDOM.findDOMNode(this.refs.itemDescription).value;

        console.log(name, price, quentity, description);
    }

    render() {
        return (
            <Modal bsClass="modal" show={this.props.showModal} onHide={this.close}>
                <ModalHeader bsClass="modal-header" closeButton>
                    <Modal.Title bsClass="modal-title">Add Store Item</Modal.Title>
                </ModalHeader>
                <ModalBody bsClass="modal-body">
                    <Form horizontal onSubmit={this.requestCredits}>
                        
                        <FormGroup className="item-modal" controlId="formGroup">
                            <ControlLabel>Item Title</ControlLabel>
                            <FormControl type="text" placeholder="Item 1" required
                                        ref="itemName"/>
                        </FormGroup>

                        <FormGroup className="item-modal" controlId="formGroup">
                            <FormControl type="number" placeholder="Price up to 2 decimal" required 
                                        ref="itemPrice"/>
                        </FormGroup>

                        <FormGroup className="item-modal" controlId="formGroup">
                            <ControlLabel>Quentity</ControlLabel>
                            <FormControl type="number" placeholder="Quentity" required 
                                        ref="itemQuentity"/>
                        </FormGroup>

                        <FormGroup className="item-modal" controlId="formGroup">
                            <ControlLabel>Short Description</ControlLabel>
                            <FormControl type="number" placeholder="Short Description" required 
                                        ref="itemDescription"/>
                        </FormGroup>

                        <FormGroup className="text-center item-modal">
                            <Button className="btn btn-info" type="submit">Add</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}

export default AddStoreItem;