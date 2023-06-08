import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { footerMinHead1, footerbgimg, footertext } from './utill'
import { FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { BsTwitter,BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
   <>
   <div className='footer'>
    <img className='footer2' src={footerbgimg} />


    <Container>
        <Row>
            <Col sm={12}>

                <div className='icon-display'>
                    <div className='facebook'>
                            <FaFacebookF />
                    </div>
                    <div className='twitter'>
                        <BsTwitter />
                    </div>
                    <div className='earth'>
                        <FaLinkedinIn />
                    </div>
                    <div className='be'>
                        <BsInstagram />
                    </div>
                </div>

                <div className='text-display'>
                    <p className='footer-links'>Home</p>
                    <p className='footer-links'>About US</p>
                    <p className='footer-links'> Sponsors</p>
                    <p className='footer-links'>Schedule</p>
                    <p className='footer-links'>Blog</p>
                    <p className='footer-links'>Contact</p>
                </div>
                <hr className='footer-hr' />
                <p className='footer-text'>{footertext}</p>
            </Col>
        </Row>
    </Container>
    {/* <Container fluid>
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
    </Container> */}
   </div>
   
   
   </>
  )
}

export default Footer