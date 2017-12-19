import React, { Component } from "react";
import ReactDOM from 'react-dom';
import firebase from './../../firebase';
import Dropzone from 'react-dropzone';
import {
    Row,
    Col,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    Image,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';
import AddStoreItem from "./AdminStore";
import "./AdminStore.css";

class AdminStore extends Component {

	constructor() {
        super();
        this.close = this.close.bind(this);
        this.addItem = this.addItem.bind(this);
        this.openModal = this.openModal.bind(this);
        this.getUrl = this.getUrl.bind(this);
        this.addItemToDatabase= this.addItemToDatabase.bind(this);
        this.state = {
            showModal: false,
            itemNo: 0,
            image: [],
            items: [],
            imageUrl: ''
        };
    }

    openModal() {
        let ctx = this;
        let messagesRef = firebase.database().ref('store');
        messagesRef.once("value", function(snapshot) {
            let itemNo = snapshot.numChildren();
            ctx.setState({ itemNo: itemNo + 1, showModal: true });
        });
    }

    close() {
        this.setState({ showModal: false, image: [] });
    }

    uploadItemImage(e) {
        console.log(e[0]);
        this.setState({ image: [e[0]] });
    }

    addItem(event) {
        let ctx = this;
        event.preventDefault();
        let no = ReactDOM.findDOMNode(this.refs.itemNo).value;
        let name = ReactDOM.findDOMNode(this.refs.itemName).value;
        let price = ReactDOM.findDOMNode(this.refs.itemPrice).value;
        let quentity = ReactDOM.findDOMNode(this.refs.itemQuentity).value;
        let description = ReactDOM.findDOMNode(this.refs.itemDescription).value;
        let image = this.state.image[0];

        console.log(no, name, price, quentity, description, image.name);
        this.setState({ showModal: false });

        let storageRef = firebase.storage().ref('files/' + no);
        storageRef.put(image).then(() => {
            ctx.getUrl(no, name, price, quentity, description, image);
        });
    }

    getUrl(no, name, price, quentity, description, image) {
        let ctx = this;
        let storageRef = firebase.storage().ref('files/' + no);
        storageRef.getDownloadURL().then(function(url) {
            console.log(url);
            //this.setState({ imageUrl: url });
            ctx.addItemToDatabase(no, name, price, quentity, description, image, url)
        }).catch(function(error) {
        
        });
    }

    addItemToDatabase(no, name, price, quentity, description, image, url) {
        firebase.database().ref('store').child(no).set({
            no: no,         
            name: name,
            price: price,
            quentity: quentity,
            description: description,
            preview: url 
        });
    }

    componentWillMount(){
    /* Create reference to messages in Firebase Database */
        let itemRef = firebase.database().ref('store').orderByKey().limitToLast(100);
        itemRef.on('child_added', snapshot => {
            /* Update React state when message is added at Firebase Database */
            // console.log(snapshot.key);
            // firebase.storage().ref('files').child(snapshot.key).getDownloadURL().then(function(url) {
            //     document.querySelector('#storeItem').src = url;
            // }).catch(function(error) {
            
            // });
            let item = { text: snapshot.val(), id: snapshot.key };
            this.setState({ items: [item].concat(this.state.items) });
            console.log(this.state.items);
        });
    }

    componentDidMount() {
        firebase.storage().ref('files').child("2").getDownloadURL().then(function(url) {
            console.log(url);
            let item = { preview: url };
            this.setState({ items: [item].concat(this.state.items) });
            console.log(url);
        }).catch(function(error) {
        
        });
    }

	render() {
        return (
        	<div>
        	   	<div className="section" style={{backgroundColor: '#eeeeee'}}>
                    <Row>
                    	<Button className="btn btn-info" onClick={this.openModal}>Add New Item</Button>
                    </Row>
                    <Row>
                        <ListGroup>
                            {
                                this.state.items.map( item => <ListGroupItem className="box" key={item.id}><Image src={item.text.preview} height="125" width="50" /><div className="main">{item.text.name}</div></ListGroupItem> )
                            }
                        </ListGroup>
                    </Row>
             	</div>
             	<div>
             		<Modal bsClass="modal" show={this.state.showModal} onHide={this.close}>
		                <ModalHeader bsClass="modal-header" closeButton>
		                    <Modal.Title bsClass="modal-title">Add Store Item</Modal.Title>
		                </ModalHeader>
		                <ModalBody bsClass="modal-body">
		                	 <Form onSubmit={this.addItem}>
		                        
                                <FormGroup>
                                    <ControlLabel>Item No</ControlLabel>
                                    <FormControl type="text" value={this.state.itemNo} disabled
                                                ref="itemNo"/>
                                </FormGroup>

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

                                <Row>
                                    <Col md={6}>
                                        <FormGroup className="item-modal" controlId="formGroup">
                                            <ControlLabel>Image</ControlLabel>
                                            <Dropzone id="dropImage" onDrop={this.uploadItemImage.bind(this)}>
                                                <p id="dropText">Click to select files.</p>
                                                {/*this.state.image.length > 0 ? <div> {this.state.image.map((image) => <img key={image.name} src={image.preview} /> )} </div> : null*/}
                                            </Dropzone>
                                            {this.state.image.length > 0 ? <div> {this.state.image.map((image) => <p key={image.name}>{image.name}</p> )} </div> : null}
                                        </FormGroup>
                                    </Col>
                                </Row>

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