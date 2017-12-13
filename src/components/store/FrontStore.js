import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./Store.css";

class FrontStore extends Component {
    
	render() {
        return (
        	<div>
        		<Carousel className="store">
                    <Carousel.Item>
                      <img width={900} height={500} alt="900x500" src="/assets/images/test/Untitled-1.jpg" />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width={900} height={500} alt="900x500" src="/assets/images/test/Untitled-1.jpg" />
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width={900} height={500} alt="900x500" src="/assets/images/test/Untitled-1.jpg" />
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        	</div>
        );
    }
}

export default FrontStore;