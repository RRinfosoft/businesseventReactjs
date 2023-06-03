import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Speakers.css'
import { mainSpeaker, mainSpeakerSecond, speaker, speakertext, speakertext2 } from './utill'

const Speakers = () => {
  return (
    <>
      <div className='Blue-bg'>
        <img className='Blue-bg-fill' src={speaker} />
        <Container >
          <p className='speakertext'>{speakertext}</p>
    <p className='speakertext2'>{speakertext2}</p>
          <Row>
          {mainSpeaker}
          <br />
          {mainSpeakerSecond}
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Speakers