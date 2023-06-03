import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {
    Aug, Aug2, Enob, EventBg, EventBg2, EventNob1, EventNob2, EventNob3
    , EventNob4, EventSchduleTitle, EventSchdules, Regis, circleimg, epic, monthon, weText
} from './utill'
import './EventSchdule.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const EventSchdule = () => {
    return (
        <>

         
           
            <Container className='section'>
            <p className='EventSchdules-main-title'>{EventSchdules}</p>
                <p className='Event-Schdules-para'>{EventSchduleTitle}</p>
                <Row>
                    {/* multicolor Card Section */}
                    <Col sm={3} className='px-0'>
                        <Link className='link-text' to='/admission'>
                            <Card className="square">
                                <Card.Body>
                                    <p className='para-text'>{EventNob1}</p>
                                </Card.Body>
                            </Card>
                            <div class="triangle-down"></div>
                        </Link>
                    </Col>
                    <Col sm={3} className='px-0'>
                        <Link className='link-text' to='/calender'>
                            <Card className="second-card" >
                                <Card.Body>
                                    <p className='para-text'>{EventNob2}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm={3} className='px-0'>
                        <Card className="third-card">
                            <Card.Body>
                                <p className='para-text'>{EventNob3}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3} className='px-0'>
                        <Link className='link-text' to='/contactus'>
                            <Card className=" fourth-card" >
                                <Card.Body>
                                    <p className='para-text'>{EventNob4}</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    {/* White Card Section */}
                    <Row className='background-color'>
                        <Col sm={4}>

                            <p className='Enob'>{Enob}<span className='Aug'>{Aug}  </span></p>

                            <p className='Aug2'>{Aug2}</p>
                            <center>
                                <div className='event-circle-img'>
                                    <img className='event-circle-img-fill' src={circleimg} />
                                </div>
                            </center>
                        </Col>
                        <Col sm={6}>
                            <p className='monthons'>{monthon}</p>
                            <p className='Regis'>{Regis}</p>
                            <p className='weText'>{weText}</p>
                            <p className='epic'>{epic}</p>
                        </Col>
                        <Col sm={2}>
                            <p className='mine'>_</p>
                        </Col>
                    </Row>
                    <Row className='background-color'>
                        <Col sm={4}>

                            <p className='Enob'>{Enob}<span className='Aug'>{Aug}  </span></p>

                            <p className='Aug2'>{Aug2}</p>
                            <center>
                                <div className='event-circle-img'>
                                    <img className='event-circle-img-fill' src={circleimg} />
                                </div>
                            </center>
                        </Col>
                        <Col sm={6}>
                            <p className='monthons'>{monthon}</p>
                            <p className='Regis'>{Regis}</p>
                            <p className='weText'>{weText}</p>
                            <p className='epic'>{epic}</p>
                        </Col>
                        <Col sm={2}>
                            <p className='mine'>_</p>
                        </Col>
                    </Row>
                    <Row className='background-color'>
                        <Col sm={4}>

                            <p className='Enob'>{Enob}<span className='Aug'>{Aug}  </span></p>

                            <p className='Aug2'>{Aug2}</p>
                            <center>
                                <div className='event-circle-img'>
                                    <img className='event-circle-img-fill' src={circleimg} />
                                </div>
                            </center>
                        </Col>
                        <Col sm={6}>
                            <p className='monthons'>{monthon}</p>
                            <p className='Regis'>{Regis}</p>
                            <p className='weText'>{weText}</p>
                            <p className='epic'>{epic}</p>
                        </Col>
                        <Col sm={2}>
                            <p className='mine'>_</p>
                        </Col>
                    </Row>

                </Row>




            </Container>
            <Container fluid className='bgs-imgs'>
                <Row>
                    <Col sm={6}>
                        <div className='Event-bg-img-box'>
                            <img className='Event-bg-img-fill' src={EventBg} />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='Event-bg-img-box2'>
                            <img className='Event-bg-img-fill' src={EventBg2} />
                        </div>
                    </Col>

                </Row>
            </Container>
            







        </>
    )
}

export default EventSchdule