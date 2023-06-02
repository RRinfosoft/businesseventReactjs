import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Speakers.css'
import { speaker } from './utill'

const Speakers = () => {
  return (
  <>
  <div className='Blue-bg'>
    <img className='Blue-bg-fill' src={speaker} />
  <Container fluid>
    <Row>
    
    </Row>
  </Container>
  </div>
  
  </>
  )
}

export default Speakers