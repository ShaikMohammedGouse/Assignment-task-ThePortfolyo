import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
function Contact() {
  const emailAddress = 'N190487@rguktn.ac.in';
  const mailtoUrl = `mailto:${emailAddress}`;
  return (
    <>
    <Container>
    <div className=' mt-5' style={{paddingTop:"20px",paddingBottom:"100px"}} id="contact" data-aos="fade-up">
     
       <Card className='p-5 ' style={{background:"#18245d",width:"100%"}}>
       <center>
      <h2 className='text-white mb-3'><span className='color'>06. &nbsp; &nbsp;</span>Get In Touch</h2>
      <p className='color mb-3'>What's next</p>
     
      <Row>
        <Col>
        </Col>
        <Col lg={8}>
          <p className="font2 color2 mb-5"> My inbox is always open. Whether you have a question or just want to say hi, <br/> I'll try my best to get back to you!</p>
        </Col>
        <Col></Col>
      </Row>
      </center>
        <Row>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-white'>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-white'> phone Number</Form.Label>
        <Form.Control type="number" placeholder="+91 XXXXX XXXXX" />
      </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='text-white'>Address</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <Col lg={2}><Button className=" gap but1 rounded-pill px-4 font2" variant="outline-info"   style={{ "fontWeight": "700" }}>Submit </Button></Col>
      
       </Card>
     
    </div>
    </Container>
    </>
  )
}

export default Contact
