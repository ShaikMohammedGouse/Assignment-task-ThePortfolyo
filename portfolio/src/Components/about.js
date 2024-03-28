import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../assests/image1.png";
import ProgressBar from 'react-bootstrap/ProgressBar';
// import Image2 from "../assests/gouse.png";
function about({data}) {
  return (
   
  <Container className='mt-5' >
    <Row id="about">
    <h2 className='text-white mb-3' data-aos="fade-right"><span className='color'>02.&nbsp; &nbsp;</span>Skills</h2>
 
        <Col lg={6} md={6} sm={12} xs={12}>
      
       
        <Row className="padd" data-aos="fade-right">
      {data && data.user && data.user.skills && data.user.skills.map((item, index) => (
        item.percentage < 92 &&
        <React.Fragment key={index}>
          <Col lg={4} md={4} sm={12} xs={12}>
            <img src={item.image.url} width={80} style={{ paddingRight: "15px" }} alt="next-icon" />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <p className='text-white font2 mb-3'>{item.name}</p>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
          <ProgressBar now={item.percentage} label={`${item.percentage}%`} />
          </Col>
        </React.Fragment>
      ))}
    </Row>
        </Col>
        <Col>
        <Row className="padd" data-aos="fade-left">
      {data && data.user && data.user.skills && data.user.skills.map((item, index) => (
        item.percentage >= 92 &&
        <React.Fragment key={index}>
          <Col lg={4} md={4} sm={12} xs={12}>
            <img src={item.image.url} width={80} style={{ paddingRight: "15px" }} alt="next-icon" />
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <p className='text-white font2 mb-3'>{item.name}</p>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
          <ProgressBar now={item.percentage} label={`${item.percentage}%`} />
          </Col>
        </React.Fragment>
      ))}
    </Row>
        </Col>
      
    </Row>
  </Container>    
  
  )
}

export default about
