import React from 'react';
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../css/colors.css";
import Button from "react-bootstrap/Button"
function Navbar1({ scrollToSection }) {
  
  return (
    
    <>
    <div className="back2 mb-5">
       <Navbar className='top fixed-top text-white'expand="lg" data-aos="fade-up" style={{background:"rgb(0, 7, 37)"}}>
              <Container>
                <Navbar.Brand href="#home"  style={{ fontSize: "34px", fontWeight: "800",color:"#13fbfe" }}>My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white",background:"white"}} />
                <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
                  <Nav className="gap1 text-white">
                  <Nav.Link   onClick={() => scrollToSection("project")} onMouseEnter={(e) => e.target.style.color = "#13fbfe"}  onMouseLeave={(e) => e.target.style.color = "white"}  style={{color:"white"}} className="but1" > <span className='color'>01.&nbsp;</span>Services</Nav.Link>
                    <Nav.Link  onClick={() => scrollToSection("about")}  onMouseEnter={(e) => e.target.style.color = "#13fbfe"}  onMouseLeave={(e) => e.target.style.color = "white"} className="but1" style={{color:"white"}}  > <span className='color'>02.&nbsp;</span>Skills</Nav.Link>
                    <Nav.Link onClick={() => scrollToSection("Projects")}   onMouseEnter={(e) => e.target.style.color = "#13fbfe"}  onMouseLeave={(e) => e.target.style.color = "white"}  style={{color:"white"}} className="but1" > <span className='color'>03.&nbsp;</span>Projects</Nav.Link>
                    <Nav.Link onClick={() => scrollToSection("experience")}   onMouseEnter={(e) => e.target.style.color = "#13fbfe"}  onMouseLeave={(e) => e.target.style.color = "white"}  style={{color:"white"}} className="but1" > <span className='color'>04.&nbsp;</span>Experience</Nav.Link>
                    <Nav.Link  onClick={() => scrollToSection("Testimonail")} onMouseEnter={(e) => e.target.style.color = "#13fbfe"}  onMouseLeave={(e) => e.target.style.color = "white"}  style={{color:"white"}}   > <span className='color'>05.&nbsp;</span>Testimonials</Nav.Link>
                    <Nav.Link  onClick={() => scrollToSection("contact")} onMouseEnter={(e) => e.target.style.color = "#13fbfe"}  onMouseLeave={(e) => e.target.style.color = "white"}  style={{color:"white"}}   > <span className='color'>06.&nbsp;</span>Contact</Nav.Link>
                  <a href="https://github.com/ShaikMohammedGouse/">  <Button className=" gap but1 rounded-pill px-4 font2" variant="outline-info"   style={{ "fontWeight": "700" }}>Github</Button></a>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </div>

    </>
  )
}

export default Navbar1
