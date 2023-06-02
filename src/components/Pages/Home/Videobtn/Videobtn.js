import React from 'react'
import './Videobtn.css'
import { Col, Container, Row } from 'react-bootstrap'
import { events, eventsSecond, img, textV } from './utill'

const Videobtn = () => {
    return (
        <>
            <div className='video-section'>
                <img className='video-section-fill' src={img} />

            </div>
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <div className='video-bg-img'>
                            <img className='video-bg-imgs' src={events} />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <p className='textV'>{textV}</p>
                    </Col>
                    <Col sm={4}>
                        <div className='video-bg-imgSecond'>
                            <img className='video-bg-fills' src={eventsSecond} />
                        </div>
                    </Col>
                </Row>
            </Container>

            <br />

        </>
    )
}

export default Videobtn