import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import heart from "../assests/heart.png";
import Col from "react-bootstrap/Col";
import Image1 from "../assests/linkedin.png";
import Image2 from "../assests/github.png";
import Image3 from "../assests/phone.png";
import Image4 from "../assests/email.png";
import Image5 from "../assests/whatsapp.png";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Introduction({data}) {
  const phoneNumber = data.user.about.phoneNumber
  const whatsAppUrl = `https://wa.me/${phoneNumber}`;
  const emailAddress = data.user.about.email

  const mailtoUrl = `mailto:${emailAddress}`;
 
  const telUrl = `tel:${phoneNumber}`;
  useEffect(() => {
    AOS.init({
      duration: 900, 
      easing: 'ease-in-out',
    });
  }, []);
  return (
    
      <Container className="mb-5" >
        {data && data.user && data.user.about && (
      <>
        <Row>
        {/* <p className="color font1" data-aos="fade-right" >Hi, &nbsp; my name is</p> */}
       
            <Col lg={8} md={8} sm={10} xs={12} data-aos="fade-right" >
            <p className='work text-white' data-aos="fade-right" > {data.user.about.name}</p>
        <p className='work text-white' data-aos="fade-right" > I am {data.user.about.title}</p>
            <p  className=' font2 color2' >{data.user.about.subTitle}</p>
            <p  className=' font2 color2' >{data.user.about.description}</p>
            <a href="https://www.linkedin.com/in/shaik-gouse-bb34a3254"> <img src={Image1}  className='gap but1' alt="linkedin-icon"></img> </a>  <a href="https://github.com/ShaikMohammedGouse/"><img src={Image2}  className='gap but1' alt="linkedin-icon"></img></a>  <a href={telUrl}><img src={Image3} className='gap but1' alt="linkedin-icon"></img></a> <a href={mailtoUrl}> <img className='gap but1' src={Image4} alt="linkedin-icon"></img> </a> <a href={whatsAppUrl}> <img className='gap but1' src={Image5} alt="linkedin-icon"></img>  </a>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12} data-aos="fade-left">
           <img src={data.user.about.avatar.url} alt="avatar" width={400} className='copp img-fuild'></img>
            </Col>
        </Row><div data-aos="fade-right"  className='gap'>
     
      </div>
      </>
      )};

      </Container>
   
  )
}

export default Introduction
