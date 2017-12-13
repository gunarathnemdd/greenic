import React, {Component} from "react";
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
import "./AboutUs.css";

class AboutUs extends Component {

	render() {
        return (
        	<div>
	        	<div className="section" style={{backgroundColor: '#eeeeee'}}>
	        		<div className="container">
	        			<h3 className="text-center">About Us</h3>
	        			<h4>Mission</h4>
	        			<p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa. Donec sagittis, nulla et consequat tincidunt, sapien odio posuere magna, ac fermentum metus lacus ut dui. Quisque euismod bibendum molestie. Vestibulum purus lacus, cursus ut diam eu, molestie ultrices diam. Curabitur molestie nisl non vulputate tristique. Phasellus purus elit, sodales a elementum et, laoreet quis purus. Sed ultricies felis ultricies dui lacinia condimentum. Nullam eros dui, dictum ut sem at, lacinia ornare nulla. Cras tristique malesuada enim, at pellentesque diam.</p>    
	        			<h4>Vision</h4>
	        			<p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa. Donec sagittis, nulla et consequat tincidunt, sapien odio posuere magna, ac fermentum metus lacus ut dui. Quisque euismod bibendum molestie. Vestibulum purus lacus, cursus ut diam eu, molestie ultrices diam. Curabitur molestie nisl non vulputate tristique. Phasellus purus elit, sodales a elementum et, laoreet quis purus. Sed ultricies felis ultricies dui lacinia condimentum. Nullam eros dui, dictum ut sem at, lacinia ornare nulla. Cras tristique malesuada enim, at pellentesque diam.</p>    
	        			
	        			<br/>

	        			<p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa. Donec sagittis, nulla et consequat tincidunt, sapien odio posuere magna, ac fermentum metus lacus ut dui. Quisque euismod bibendum molestie. Vestibulum purus lacus, cursus ut diam eu, molestie ultrices diam. Curabitur molestie nisl non vulputate tristique. Phasellus purus elit, sodales a elementum et, laoreet quis purus. Sed ultricies felis ultricies dui lacinia condimentum. Nullam eros dui, dictum ut sem at, lacinia ornare nulla. Cras tristique malesuada enim, at pellentesque diam.</p>    
	        		
	        			<br/>

	        			<Row>
                            <Col xs={12} md={4} className="text-center">
                            	<Image src="/assets/images/admin/koka.jpg" height={250} alt="picture1" circle/>
                            	<br/><br/>
                            	<h4>Sachintha</h4>
                            	<p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa. Donec sagittis, nulla et consequat tincidunt, sapien odio posuere magna, ac fermentum metus lacus ut dui. Quisque euismod bibendum molestie. Vestibulum purus lacus, cursus ut diam eu, molestie ultrices diam. Curabitur molestie nisl non vulputate tristique. Phasellus purus elit, sodales a elementum et, laoreet quis purus. Sed ultricies felis ultricies dui lacinia condimentum. Nullam eros dui, dictum ut sem at, lacinia ornare nulla. Cras tristique malesuada enim, at pellentesque diam.</p>
                            </Col>
                            <Col xs={12} md={4} className="text-center">
                            	<Image src="/assets/images/admin/piston.jpg" height={250} alt="picture1" circle/>
                            	<br/><br/>
                            	<h4>Asiri</h4>
                            	<p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa. Donec sagittis, nulla et consequat tincidunt, sapien odio posuere magna, ac fermentum metus lacus ut dui. Quisque euismod bibendum molestie. Vestibulum purus lacus, cursus ut diam eu, molestie ultrices diam. Curabitur molestie nisl non vulputate tristique. Phasellus purus elit, sodales a elementum et, laoreet quis purus. Sed ultricies felis ultricies dui lacinia condimentum. Nullam eros dui, dictum ut sem at, lacinia ornare nulla. Cras tristique malesuada enim, at pellentesque diam.</p>
                            </Col>
                            <Col xs={12} md={4} className="text-center">
                            	<Image src="/assets/images/admin/bebun.jpg" height={250} alt="picture1" circle/>
                            	<br/><br/>
                            	<h4>Manoj</h4>
                            	<p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id commodo ex, vitae auctor massa. Fusce posuere mollis sagittis. Pellentesque sed interdum ipsum. Mauris vel diam mi. Ut libero quam, mattis eget feugiat vel, porta nec nisl. Cras ut venenatis ante, vitae tempor turpis. Aliquam non convallis velit. Sed at tempor massa. Donec sagittis, nulla et consequat tincidunt, sapien odio posuere magna, ac fermentum metus lacus ut dui. Quisque euismod bibendum molestie. Vestibulum purus lacus, cursus ut diam eu, molestie ultrices diam. Curabitur molestie nisl non vulputate tristique. Phasellus purus elit, sodales a elementum et, laoreet quis purus. Sed ultricies felis ultricies dui lacinia condimentum. Nullam eros dui, dictum ut sem at, lacinia ornare nulla. Cras tristique malesuada enim, at pellentesque diam.</p>
                            </Col>
                        </Row>
	        		</div>
	        	</div>
	        </div>
        );
    }
}

export default AboutUs;