import React, { Component } from "react";
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
import AddStoreItem from "./AdminStore";

class AdminStore extends Component {

	constructor() {
        super();
        this.close = this.close.bind(this);
        this.addItem = this.addItem.bind(this);
        this.openModal = this.openModal.bind(this);
        this.state = {
            showModal: false
        };
    }

    openModal() {
    	this.setState({showModal: true});
    }

    close() {
        this.setState({showModal: false});
    }

    addItem(event) {
        let ctx = this;
        event.preventDefault();
        let name = ReactDOM.findDOMNode(this.refs.itemName).value;
        let price = ReactDOM.findDOMNode(this.refs.itemPrice).value;
        let quentity = ReactDOM.findDOMNode(this.refs.itemQuentity).value;
        let description = ReactDOM.findDOMNode(this.refs.itemDescription).value;

        console.log(name, price, quentity, description);
        this.setState({showModal: false});
    }

	render() {
        return (
        	<div>
        	   	<div className="section" style={{backgroundColor: '#eeeeee'}}>
                	<p>Admin Store</p>
                	<Button className="btn btn-info" onClick={this.openModal}>Add New Item</Button>
             	</div>
             	<div>
             		<Modal bsClass="modal" show={this.state.showModal} onHide={this.close}>
		                <ModalHeader bsClass="modal-header" closeButton>
		                    <Modal.Title bsClass="modal-title">Add Store Item</Modal.Title>
		                </ModalHeader>
		                <ModalBody bsClass="modal-body">
		                	 <Form onSubmit={this.addItem}>
		                        
		                        <FormGroup>
		                            <ControlLabel>Item Title</ControlLabel>
		                            <FormControl type="text" placeholder="Item 1" required
		                                        ref="itemName"/>
		                        </FormGroup>

		                        <FormGroup className="item-modal" controlId="formGroup">
		                        	<ControlLabel>Price</ControlLabel>
		                            <FormControl type="number" placeholder="Price up to 2 decimal" required 
		                                        step="0.01" ref="itemPrice"/>
		                        </FormGroup>

		                        <FormGroup className="item-modal" controlId="formGroup">
		                            <ControlLabel>Quentity</ControlLabel>
		                            <FormControl type="number" placeholder="Quentity" required 
		                                        ref="itemQuentity"/>
		                        </FormGroup>

		                        <FormGroup className="item-modal" controlId="formGroup">
		                            <ControlLabel>Short Description</ControlLabel>
		                            <FormControl type="text" placeholder="Short Description" required 
		                                        ref="itemDescription"/>
		                        </FormGroup>

		                        <FormGroup className="text-center item-modal">
		                            <Button className="btn btn-info" type="submit">Add</Button>
		                        </FormGroup>
		                    </Form>
		                </ModalBody>
		            </Modal>
             	</div>
        	</div>
        );
    }
}

export default AdminStore;