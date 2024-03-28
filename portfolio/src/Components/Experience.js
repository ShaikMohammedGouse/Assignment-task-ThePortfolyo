import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../assests/image1.png";
function Experience({data}) {
  return (
  <>
    <Container className='mb-5 mt-5' style={{paddingTop:"20px"}}>
        <Row id="experience">
        <h2 className='text-white mb-3'data-aos="fade-right"><span className="color">04.&nbsp; &nbsp;</span>My Professional Experience</h2>
      
            <Col lg={6} md={6} sm={12} xs={12}>
              <h3  className='text-white mb-3'> forEducation</h3>
            {data && data.user && data.user.timeline && data.user.timeline
  .filter(item => item.forEducation === true) 
  .map((item, index) => (


            <div className='padd' key={index}  style={{paddingBottom:"30px"}}>
          
            <p className='text-white fs-5 ' data-aos="fade-right">{item.jobTitle} - <span className="color" > {item.company_name} at  </span> {item.jobLocation}</p>
            <p className='text-white fs-5' ></p>
            {item.bulletPoints.map((bulletPoints, subIndex) => (
               
              
           <Row key={subIndex}>
            <Col lg={1} md={1} sm={1} xs={2} data-aos="fade-right">
            <img src={Image1} width={30}  alt="next-icon"></img>
            </Col>
            <Col lg={8}  md={9} sm={10} xs={10} data-aos="fade-right">
            <p className="color2 font2 mb-3">{bulletPoints}</p></Col>
          <Col></Col>
           </Row>
           ))}
          </div>
         ))}
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} >
            <h3  className='text-white mb-3'> Experience</h3>
            {data && data.user && data.user.timeline && data.user.timeline
  .filter(item => item.forEducation === false) 
  .map((item, index) => (


            <div className='padd' key={index}>
             
            <p className='text-white fs-5 ' data-aos="fade-left">{item.jobTitle} - <span className="color" > {item.company_name} at  </span> {item.jobLocation}</p>
            <p className='text-white fs-5' ></p>
            {item.bulletPoints.map((bulletPoints, subIndex) => (
               
              
           <Row key={subIndex}>
            <Col lg={1} md={1} sm={1} xs={2} data-aos="fade-left">
            <img src={Image1} width={30}  alt="next-icon"></img>
            </Col>
            <Col lg={8}  md={9} sm={10} xs={10} data-aos="fade-left">
            <p className="color2 font2 mb-3">{bulletPoints}</p></Col>
        
           </Row>
           ))}
           
        </div>
  ))}
      </Col>
      
        </Row>
    
     </Container>
     </>
  )
}

export default Experience
