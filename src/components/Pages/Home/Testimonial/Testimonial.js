import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap'
import './Testimonial.css'
import { Caropara, caroImgbg, name, name2, ninepng, testimonialImg, testimonialImg2, testimonialImg3 } from './utill';

const Testimonial = () => {


    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <div className='caro-bg-img'>
                                    <img src={caroImgbg} />
                                </div>
                                <div className='carousel-img-box'>
                                    <img className='carousel-img-fill' src={testimonialImg} />
                                </div>
                            </Col>

                            <Col sm={6}>

                                <div className='text-img'>
                                    <img className='text-img-fill' src={ninepng} />
                                </div>
                                <p className='Caropara'>{Caropara}</p>
                                <p className='name'>{name}</p>
                                <p className='name-text'>{name2}</p>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <div className='caro-bg-img'>
                                    <img src={caroImgbg} />
                                </div>
                                <div className='carousel-img-box'>
                                    <img className='carousel-img-fill' src={testimonialImg2} />
                                </div>
                            </Col>

                            <Col sm={6}>
                                <div className='text-img'>
                                    <img className='text-img-fill' src={ninepng} />
                                </div>
                                <p className='Caropara'>{Caropara}</p>
                                <p className='name'>{name}</p>
                                <p className='name-text'>{name2}</p>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col sm={6}>
                            <div className='caro-bg-img'>
                                    <img src={caroImgbg} />
                                </div>
                                <div className='carousel-img-box'>
                                    <img className='carousel-img-fill' src={testimonialImg3} />
                                </div>
                            </Col>

                            <Col sm={6}>
                                <div className='text-img'>
                                    <img className='text-img-fill' src={ninepng} />
                                </div>
                                <p className='Caropara'>{Caropara}</p>
                                <p className='name'>{name}</p>
                                <p className='name-text'>{name2}</p>
                            </Col>

                        </Row>
                    </Container>
                </Carousel.Item>

            </Carousel>



        </>
    )
}

export default Testimonial