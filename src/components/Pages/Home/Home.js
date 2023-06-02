import React from 'react'
import './Home.css'
import { HomeBG, HomeBanner, HomeText, HomeText2, triangle } from './utill'
import { Container, Row, Col } from 'react-bootstrap'
import SubHome from './SubHome/SubHome'
import Sponsors from './Sponsors/Sponsors'
import Videobtn from './Videobtn/Videobtn'
import Speakers from './Speakers/Speakers'

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
          <br />    <br />    <br />    <br />
          <Col sm={3}>
            <div className='P-Box'>

            </div>
          </Col>
          <Col sm={3}>
            <div className='Y-Box'>

            </div>
          </Col>
          <Col sm={3}>
            <div className='Sk-Box'>

            </div>
          </Col>
          <Col sm={3}>
            <div className='I-Box'>

            </div>
          </Col>

        </Row>
      </Container>
      <br />
      <SubHome />
      <Sponsors />
      <Videobtn/>
      <Speakers />


    </>
  )
}

export default Home