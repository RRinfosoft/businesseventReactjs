import React from 'react'
import './SubAbout.css'
import { Col, Container, Row } from 'react-bootstrap'
import { SubColImg, SubSecondimg, Why, great, mainIconArray } from './utill '

const SubAbout = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <div className='Sub-column'>
                            <img className='Sub-column-fill' src={SubColImg} />
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='second-column'>
                            <p className='crose'>
                            <i class="fa-sharp fa-solid fa-xmark fa-flip fa-xl" ></i>
                            </p>
                        
                            <p className='why'>{Why}</p>
                            <p className='great'>{great}</p>
                            {mainIconArray}
                            <div className='shape-img'>
                                <img className='Sub-column-fill' src={SubSecondimg} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default SubAbout