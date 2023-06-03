import React, { useState,useEffect } from 'react'
import './Clock.css'
import { Container, Row,Col } from 'react-bootstrap'

const Clock = () => {
    const [days, setDays] =useState()
    const [hours, setHours] =useState()
    const [minutes, setMinutes] =useState()
    const [seconds, setSeconds] =useState()
 
 
    let interval;
 
    const countDown = () =>{
 
        const destination = new Date( 'June 1, 2023 ').getTime()
 
        interval = setInterval(()=>{
 
             const now = new Date().getTime()
             const different = destination - now
             const days = Math.floor( different / (1000 * 60 * 60 *24))
 
 
             const hours = Math.floor( different % (1000 * 60 * 60 *24) /
             (1000*60*60 ))
 
 
             const minutes = Math.floor(different % (1000 * 60 * 60 ) /
             (1000*60 )) 
 
 
             const seconds = Math.floor(different % (1000 * 60 ) / 1000 ) 
 
             if( destination < 0 ) clearInterval(interval.current)
             else{
                 setDays(days)
                 setHours(hours)
                 setMinutes(minutes)
                 setSeconds(seconds)
             }
             
        });
    };
 
 
    useEffect(()=>{
     countDown()
    })
  return (
    <>
    <Container>
        <Row>
            <Col sm={3}>
            <div className='P-Box'>
                <p className='Function-text'>{days}</p>
                <p className='simple-text'>Days</p>
            </div>
          </Col>
          <Col sm={3}>
            <div className='Y-Box'>
            <p className='Function-text'>{hours}</p>
            <p className='simple-text'>Hours</p>
            </div>
          </Col>
          <Col sm={3}>
            <div className='Sk-Box'>
            <p className='Function-text'>{minutes}</p>
            <p className='simple-text'>Minutes</p>
            </div>
          </Col>
          <Col sm={3}>
            <div className='I-Box'>
            <p className='Function-text'>{seconds}</p>
            <p className='simple-text'>Seconds</p>
            </div>
          </Col>
        </Row>
    </Container>
    
    
    
    
    </>
  )
}

export default Clock