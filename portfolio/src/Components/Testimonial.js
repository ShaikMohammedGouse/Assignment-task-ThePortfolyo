import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Container } from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TestimonialSection = ({data}) => {

  return (
    <>
    <Container id="Testimonail" data-aos="zoom-out">
    <h2 className='text-white mb-3'><span className='color'>05. &nbsp; &nbsp;</span>Testimonial</h2>
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
        centeredSlides={true}
         breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       
    className="mySwiper"
  >
      {data && data.user && data.user.testimonials && data.user.testimonials.map((item, index) => (
        <>
    <SwiperSlide className='text-white' key={index}>
  
    <Card style={{background:"#18245d"}} >
      <Card.Body>
        <Row>
          <Col>
          <img className='img-fluid' src={item.image.url}></img>
          </Col>
          <Col>
          <h3 className='text-white'>{item.name}</h3>
          <h5 className='color'>{item.position}</h5>
          <p  className=' color2'>{item.review}</p>
          </Col>
        </Row>
     
      </Card.Body>
    </Card>
    </SwiperSlide>
    </>
      ))}
    </Swiper>
    </Container>
    </>
  );
};

export default TestimonialSection;