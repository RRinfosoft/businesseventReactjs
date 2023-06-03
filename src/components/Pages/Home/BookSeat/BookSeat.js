import React from 'react'
import './BookSeat.css'
import { back1, back2, back3, back4, bookCradimg, bookImg } from './utill'
import { Col, Container, Row } from 'react-bootstrap'

const BookSeat = () => {
    return (
        <>
            {/* <div className='book-imgs'>
    <img className='book-img-fill' src={ bookImg}/>
 </div> */}
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className='Violate-Card'>
                            <img className='Violate-Card-fill' src={bookCradimg} />
                        </div>
                        <div className='Violate-Card-white white-padding'>
                            <p className='back1'>{back1}</p>
                            <p className='back1'>{back2}</p>
                            <p className='back1'>{back3}</p>
                            <p className='back1'>{back4}</p>
                            <center>
                                <button className='book-btn'>Book A Seat</button>
                            </center>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='Pink-Card'>
                            <img className='Violate-Card-fill' src={bookCradimg} />
                        </div>
                        <div className='Pink-Card-white white-padding'>
                            <p className='back1'>{back1}</p>
                            <p className='back1'>{back2}</p>
                            <p className='back1'>{back3}</p>
                            <p className='back1'>{back4}</p>
                            <center>
                                <button className='book-btn-pink'>Book A Seat</button>
                            </center>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='Yellow-Card'>
                            <img className='Violate-Card-fill' src={bookCradimg} />
                        </div>
                        <div className='Yellow-Card-white white-padding'>
                            <p className='back1'>{back1}</p>
                            <p className='back1'>{back2}</p>
                            <p className='back1'>{back3}</p>
                            <p className='back1'>{back4}</p>
                            <center>
                                <button className='book-btn-yellow'>Book A Seat</button>
                            </center>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
        </>
    )
}

export default BookSeat