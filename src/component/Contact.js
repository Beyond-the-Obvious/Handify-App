import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import swal from 'sweetalert';
import map from '../assets/maps.png';
import "../css/contact.css";
import handifylogo from '../assets/handifylogo.png';

class Contact extends Component {

  onClick = (e) => {
    e.preventDefault();
    swal("Success!", "Your message has been sent!", "success");
  }

  render() {
    return (
      <>
        <div className="contactContainer">
          <h1 className='contactHeader'> Share your Thoughts Here!</h1>
          <div className="pb-5 d-flex justify-content-around align-items-center gap-5 contactBodyContainer" >
            <Form className='contactForm shadow-lg  bg-white rounded'>

              <Row className="mb-3">
                <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control placeholder='Enter your first name' />
                </Col>

                <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control placeholder='Enter your last name' />
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder='Enter a valid email' type="email" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1" >
                <Form.Label>Message</Form.Label>
                <Form.Control placeholder='Enter your message here' as="textarea" rows={3} />
              </Form.Group>
              <div className='d-flex justify-content-between'>
              <Button className="cartBtn" onClick={this.onClick} variant="primary" type="submit">Submit</Button>
              <img src={handifylogo} alt="Logo" className='contactLogoImg'/>
              </div>
                

            </Form>
          <img src={map} alt="Location map" className='mapImg shadow-lg  bg-white rounded' />
          </div>
        </div>

      </>
    );
  }
}

export default Contact;