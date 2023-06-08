import React from 'react'
import './Event.css'
import { Newsletter, mainEvents, mainEvents2, samllBG, text, text2, videotag } from './utill'
import { Col, Container, Row } from 'react-bootstrap'
import { TfiViewGrid } from "react-icons/tfi";

const Events = () => {
  return (
<>
<div className='video-sections'>
    <img className='video-sections2' src={videotag} />
    <p className='event-text'>{text}</p>
    <p className='event-text2'>{text2}</p>
</div>
        <Container>
            <Row>
                <Col sm={12}>
                    <div className='input-display2'>
                        <input 
                        className='input-size'
                        type='search'
                         placeholder='Search Event' />
                            <input 
                        className='input-size2'
                        type='location'
                         placeholder='Location' />
                           <button className='find-btn'>Find Event</button>
                           <button className='hide-btn'>Hide Filters</button>
                          <button className='hide-btn'> <TfiViewGrid /></button>
                    </div>
                </Col>
                <div style={{marginTop:"50px"}}></div>
                {mainEvents}
                <div style={{marginTop:"100px"}}></div>
                {mainEvents2}
            </Row>
        </Container>



        <div className="newsletter">
            <img className="newsletter2" src={Newsletter} />
         
        </div>
        <Container>
            <Row>
            <div className='multi'>
                <img className='multi2'  src={samllBG} />
            </div>
           
                <Col sm={6}>

                </Col>
                <Col sm={6}>
                    
                </Col>
      
            </Row>
          </Container>
</>
  )
}

export default Events