import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { cardImg, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6, cardImg7 } from './utill'
import './Card.css'
const Card = () => {
    return (
        <>
           
            <div className='tour-section'>
                <Container fluid >
                    <Row className='tours-box '>
                        <Col sm={3} className='tours-items px-0'>
                            <div className='tours-image-content'>
                                <img src={cardImg} />
                                <div className='image-text'>
                                    <h1>Business Events</h1>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className='tours-items px-0'>
                            <div className='tours-image-content'>
                                <img src={cardImg2} />
                                <div className='image-text'>
                                <h1>Business Events</h1>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className='tours-items px-0'>
                            <div className='tours-image-content'>
                                <img src={cardImg3} />
                                <div className='image-text'>
                                <h1>Business Events</h1>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className='tours-items px-0'>
                            <div className='tours-image-content'>
                                <img src={cardImg4} />
                                <div className='image-text'>
                                <h1>Business Events</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
<br />
            <div id="tour2">
                <Container fluid >
                    <Row className='tours-box '>
                        <Col sm={3} className='tours-items px-0'>
                            <div className='tours-image-content'>
                                <img src={cardImg6} />
                                <div className='image-text'>
                                    <h1>Business Events</h1>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className='tours-items px-0'>
                            <div className='tours-image-content'>
                                <img src={cardImg7} />
                                <div className='image-text'>
                                <h1>Business Events</h1>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className='tours-items px-0'>
                            <div className='tours-image-content'>
                                <img src={cardImg5} />
                                <div className='image-text'>
                                <h1>Business Events</h1>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3} className='tours-items px-0'>
                            <div className='tours-image-content'>
                                <img src={cardImg2} />
                                <div className='image-text'>
                                <h1>Business Events</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </>
    )
}

export default Card