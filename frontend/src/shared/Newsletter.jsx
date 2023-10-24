import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return(
     <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Stay Informed with Our Newsletter.</h2>
                    <div className="newsletter__input">
                        <input type='email' placeholder='Enter your email'/>
                        <button className="btn newsletter__btn">SUBSCRIBE</button>
                    </div>
                    <p>Get the latest bus schedule updates, travel tips, and exclusive offers delivered to your inbox. 
                        Sign up for our newsletter today!.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter