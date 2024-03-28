import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image1 from "../assests/github-icon.png";
import Image2 from "../assests/link.png";
import Gold from "../assests/gold.png";
import Artflix from "../assests/artflix.png";
import Zenith from "../assests/zenith.png";

function works({data}) {
  return (
     <Container className='mb-5 mt-5' style={{paddingTop:"20px"}} id="project">
       <h2 className='text-white mb-5' data-aos="fade-up"><span className='color'>01. &nbsp; &nbsp;</span>Services</h2>
     
        <Row className='mb-5' >
        {data && data.user && data.user.services && data.user.services.map((item, index) => (
         <>
            <Col data-aos="fade-right" lg={3} md={6} sm={12} xs={12} key={index}>  
            {/* {item.image.map((url) => ( */}
            <img src={item.image.url} alt="gold-pie" className="img-fluid" style={{paddingTop:"20px"}}  />
            {/* ))} */}
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
            <p className='color mb-3 py-3' data-aos="fade-left">{item.charge}</p>
           <p className='fs-4 text-white mb-3 ' data-aos="fade-left" style={{fontWeight:"600"}}>{item.name}</p>
           <Card style={{background:"#0a2351"}} className="mb-3" >
   <p className='font2 color2 py-2 px-3 aligin-items-center' data-aos="fade-left">{item.desc} </p>
           </Card>
            </Col>
            </>
      ))}
        </Row>
    
     </Container>
  )
}

export default works
