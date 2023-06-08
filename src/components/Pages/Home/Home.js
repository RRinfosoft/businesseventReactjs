import React from 'react'
import './Home.css'
import { HomeBG, HomeBanner, HomeText, HomeText2, triangle } from './utill'
import { Container, Row, Col,  } from 'react-bootstrap'
import SubHome from './SubHome/SubHome'
import Sponsors from './Sponsors/Sponsors'
import Videobtn from './Videobtn/Videobtn'
import Speakers from './Speakers/Speakers'
import EventSchdule from './EventSchdule/EventSchdule'
import Clock from './Clock/Clock'
import BookSeat from './BookSeat/BookSeat'
import Testimonial from './Testimonial/Testimonial'
import Card from './Card/Card'

const Home = () => {
  return (
    <>
      <div className='Home-bg-img'>
        <img className='Home-bg-img-fill' src={HomeBG} />
        <div className='third-img'>
          <img className='triangle-img' src={triangle} />
        </div>
      </div>
      <Container>
        <Row >
          <p className='HomeText'>{HomeText}</p>
          <p className='HomeText2'>{HomeText2}</p>
        </Row>
     
      </Container>
      <div style={{marginTop:"100px"}}></div>
      <Clock />
      <SubHome />
      <Sponsors />
      <Videobtn/>
      <Speakers />
      <EventSchdule />
      <BookSeat />
      <Testimonial />
      <Card />


    </>
  )
}

export default Home