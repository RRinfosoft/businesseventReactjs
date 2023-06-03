import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { footerMinHead1 } from './utill'

const Footer = () => {
  return (
   <>
   <div className='footer'>
    <Container fluid>
        <Row>
            <Col sm={4}>
                <p className='footerMinHead1'>{footerMinHead1}</p>
            </Col>
            <Col sm={4}>
            <p className='footerMinHead1'>{footerMinHead1}</p>
            </Col>
            <Col sm={4}>
            <p className='footerMinHead1'>{footerMinHead1}</p>
            </Col>
        </Row>
    </Container>
   </div>
   
   
   </>
  )
}

export default Footer