import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'
import { AboutContainerImg, An, get, subtitle, text, title } from './utill'
import SubAbout from './Sub-About/SubAbout'
import Speakers from '../Home/Speakers/Speakers'
import Sponsors from '../Home/Sponsors/Sponsors'
import Timer from './Timer/Timer'
// import Testimonial from '../Testimonial/Testimonial'
import Testimonial from '../Home/Testimonial/Testimonial'

const About = () => {
  return (
<>

<div className='About-container'>
<img className='About-container2' src={AboutContainerImg}/>
<Container fluid>
<Row>
   <p className='title'>{title}</p>
   <p className='subtitle'>{subtitle}</p>
</Row>
</Container>
</div>

{/* Second section in About */}
<Container className='section'>
    <Row>
        <Col sm={6}>
            <p className='an'>{An}</p>
            <p className='get'>{get}</p>
        </Col>
        <Col sm={6}>
         <p className='text'>{text}</p>

       <button className='Contact-btn'>Contact For booking</button>
 
        </Col>
    </Row>
</Container>
<br />
<SubAbout />
<div style={{marginTop:"200px"}}></div>
<Speakers />
<Sponsors />
<Timer />
<Testimonial />



</>
  )
}

export default About