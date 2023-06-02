import React from 'react'
import './Sponsors.css'
import { Container, Row } from 'react-bootstrap'
import { mainBannericon, mainBannericonsecond, spons, spons2 } from './utill'

const Sponsors = () => {
  return (
<>
<Container >
    <p className='spons'>{spons}</p>
    <p className='spons-sub'>{spons2}</p>
    <Row>
        {mainBannericon}
        {mainBannericonsecond}
    </Row>
</Container>


</>
  )
}

export default Sponsors