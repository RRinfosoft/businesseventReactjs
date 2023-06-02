import React from 'react'
import './SubHome.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FColumn, FColumn2, FColumn3, FColumn4, confrence, mainIcon, nob, we } from './utill'

const SubHome = () => {
    return (
        <Container className='sub-section'>
            <Row>
                <Col sm={6}>
                    <Row>
                        <Col sm={6}>
                            <div className='Sub-Fcol-img-box'>
                                <img className='Sub-img-fill' src={FColumn} />
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className='Sub-Scol-img-box'>
                                <img className='Sub-img-fill2' src={FColumn2} />
                            </div>
                        </Col>
                    <div className='bg-img'>
                    <img  className='bg-imgs' src={FColumn3} />
                    </div>
                    <div className='bg-img2'>
                    <img  src={FColumn4} />
                    </div>
                    </Row>
                    <div></div>


                </Col>
                <Col sm={6}>
                    <p className='nob'>{nob}</p>
                    <p className='confrence'>{confrence}</p>
                    <p className='we'>{we}</p>
                    <Row>
                    {mainIcon}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SubHome