import React from 'react'
import './Contact.css'
import {
    conText1, conText2, conText3, contact, contactText, contactText2,
    contactimg, get, our1, our2, our3, send
} from './utill'
import { Container, Row, Col } from 'react-bootstrap'
import { ImLocation2 } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    return (
        <>
            <div className='contact-img'>
                <img className='contact-img2' src={contactimg} />
                <p className='contact-first-text'>{contactText}</p>
                <p className='contact-second-text'>{contactText2}</p>
            </div>

            <Container className='section'>
                <Row>
                    <Col sm={6}>
                        <p className='con-get'>{get}</p>
                        <p className='contact-get'>{contact}</p>
                        <span className='icon-color'><ImLocation2 />  <p className='our1'>{our1}</p></span>
                        <p className='conText1'>{conText1}</p>

                        <span className='icon-color2'><FiPhoneCall /> <p className='our1'>{our2}</p></span>
                        <p className='conText1'>{conText2}</p>


                        <span className='icon-color3'><HiOutlineMail />  <p className='our1'>{our3}</p></span>
                        <p className='conText1'>{conText3}</p>


                    </Col>
                    <Col sm={6}>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.196060779947!2d78.77054666508712!3d28.83302233233912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbc0611edfe1%3A0xa8422c0a52f2e022!2sKothiwal%20Nagar%2C%20Shankar%20Nagar%2C%20Malviya%20Nagar%2C%20Budh%20Bazaar%2C%20Moradabad%2C%20Uttar%20Pradesh%20244001!5e0!3m2!1sen!2sin!4v1671620767347!5m2!1sen!2sin" width="600" height="550" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </Col>
                </Row>
            </Container>



            {/* form container */}
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className='contact-bg-color'>
                            <p className='send'>{send}</p>
                            <form className="row g-4 p-3 registration-form" >
                                <div class="col-md-6 position-relative">
                               
                                    <input type="text" class="form-control" 
                                  
                                    placeholder='Enter Your Name'

                                    />
                                </div>
                                <div class="col-md-6 position-relative">
                            
                                    <input type="text" class="form-control"
                                         placeholder='Enter Your Email'
                                    />
                                </div>
                                <div class="col-md-6 position-relative">
                           
                                    <input type="text" class="form-control"
                                         placeholder='Enter Phone'

                                    />
                                </div>
                                <div class="col-md-6 position-relative">
                               
                                    <input type="text" class="form-control"
                                         placeholder='Subject'
                                    />
                                </div>

                                <div class="mb-4">
                                   
                                    <textarea placeholder='Your Message' class="form-control" id="exampleFormControlTextarea1" rows="3"

                                    ></textarea>
                                </div>
                                <center>

                                    <button className="stu_btn"
                                        type="submit"
                                    >
                                        Submit
                                    </button>

                                </center>




                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact