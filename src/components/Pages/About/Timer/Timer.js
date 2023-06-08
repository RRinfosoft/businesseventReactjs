import React, { useState, useEffect } from 'react'
import './Timer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { TimerBgImg, booktimertable } from './utill'

const Timer = () => {



    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()


    let interval;
    const countDown = () => {
        const destination = new Date('June 1, 2023 ').getTime()
        interval = setInterval(() => {

            const now = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24))

            const hours = Math.floor(different % (1000 * 60 * 60 * 24) /
                (1000 * 60 * 60))

            const minutes = Math.floor(different % (1000 * 60 * 60) /
                (1000 * 60))

            const seconds = Math.floor(different % (1000 * 60) / 1000)

            if (destination < 0) clearInterval(interval.current)
            else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        });
    };
    useEffect(() => {
        countDown()
    })
    return (
        <>
            <div className='Timer-bg-img'>
                <img className='Timer-bg-itm-fill' src={TimerBgImg} />

            </div>
            <Container >
                <Row>
                    <Col sm={4}>
                        <p className='book-timer-table'>{booktimertable}</p>
                        <button className='ticket-btn'>
                            Buy Ticket Now
                        </button>
                    </Col>
                    <Col sm={8}>
                        <div className='disply'>
                            <p className='days-text1'>{days}</p>
                            {/* <p className='simple-text-days'>Days</p> */}
                            <p className='days-text2'>{hours}</p>
                            {/* <p className='simple-text-days'>Hours</p> */}
                            <p className='days-text3'>{minutes}</p>
                            {/* <p className='simple-text-days'>minutes</p> */}
                            <p className='days-text4'>{seconds}</p>
                            {/* <p className='simple-text-days'>seconds</p> */}
                        </div>

                        <div className='disply2'>
                           
                            <p className='simple-text-timer'>Days</p>
                          
                            <p className='simple-text-timer'>Hours</p>
                            
                            <p className='simple-text-timer'>minutes</p>
                         
                            <p className='simple-text-timer'>seconds</p>
                        </div>

                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default Timer