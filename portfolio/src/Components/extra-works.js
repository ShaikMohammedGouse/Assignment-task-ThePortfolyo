import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import image29 from "../assests/image1.png";
import Image1 from "../assests/github-icon.png";
import Image2 from "../assests/link.png";
import Button from "react-bootstrap/Button";
import Saas1 from "../assests/saas1.png";
import Saas2 from "../assests/saas2.png";
import VB from "../assests/vb.png";
function extraworks({data}) {
  return (
    <div style={{padidngTop:"20px"}} className="mb-5 mt-5">
      <Container id="Projects">
        <center>
        <h2 className='text-white mb-3' data-aos="fade-up"><span className='color'>03. &nbsp; &nbsp;</span>Projects I Have Done</h2>
        <p className="color" data-aos="fade-left">Creative Work</p>
        </center>
        <Row>
        {data && data.user && data.user.projects.reverse() && data.user.projects.reverse().map((item, index) => (
            <>
        <Col lg={4} md={6} sm={12}  data-aos="fade-up" key={index}>
            <Card className='custom-card1 mb-5' style={{background:"#18245d",width:"100%"}}>
            
                <Card.Img
                  className='card-image1 but2'
                  variant='top'
                  src={item.image.url}
                  style={{"border-radius":"10px",padding:"10px"}}
                />
          
                  <Card.Body  >
                  <h4 className='fs-4 text-white mb-3 ' style={{fontWeight:"600"}}>{item.title}</h4>
                  <p  className=' font2 color2' >{item.description}</p>
                <Row className="color3">
                {item.techStack.slice(0, 4).map((Tech, subIndex) => (
            <Col lg={3} key={subIndex}>
             <p>{Tech}</p>
            </Col>
                ))}
         </Row>
         <Row>
          <Col>
     <a href="https://github.com/ShaikMohammedGouse/" >    <Button className=" gap but1 rounded-pill px-4 font2" variant="outline-info"   style={{ "fontWeight": "700" }}>Github</Button>  </a>
          </Col>
          <Col>
          <a href="https://company-sites.netlify.com"> <Button className=" gap but1 rounded-pill px-4 font2" variant="outline-info"   style={{ "fontWeight": "700" }}>Go To </Button> </a>
          </Col>
         </Row>
                  </Card.Body>
              </Card>
            </Col>

            </>
        ))}
        </Row>
      </Container>
    </div>
  )
}

export default extraworks;
